'use client';

import { useEffect, useState } from 'react';
import articleDetailGet from '@/api/article/articleDetailGet';
import {
    StyledComment,
    StyledCommentBody,
    StyledCommentTop,
    StyledArticle,
    ArticleContainer,
    StyledArticleContent,
    StyledArticleHeader,
    StyledArticleBody,
    StyledArticleTop,
    StyledRightContent,
    StyledArticleComment,
    StyledCommentHeader,
} from './Article.Styled';
import RightBar from '../articles/components/rightbar';

import Image from 'next/image';
import Button from '@/components/button';
import Input from '@/components/input';
import HR from '@/components/hr';
import articleCommentPost from './../../api/article/articleCommentPost';
import { useRouter } from 'next/navigation';
import { StyledPageContainer, StyledPageContent } from '../recordsearch/components/right/Right.Styled';

const Article = (props: any) => {
    const router = useRouter();
    const { articleId } = props;
    const [articleDetail, setArticleDetail] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState<any>([]);
    const [commentContent, setCommentContent] = useState<string>('');

    const handleChange = (event: any) => {
        setCommentContent(event.target.value);
    };

    const saveComment = () => {
        const data = {
            content: commentContent,
        };

        if (data.content) {
            articleCommentPost(articleId, data).then((res) => {
                window.location.reload();
            });
        } else {
            console.log('No data');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            saveComment();
        }
    };

    const handlePageClick = async (pageNumber: number) => {
        try {
            const res = await articleDetailGet(articleId, pageNumber - 1);
            setComments(res.result.comments);

            // router.push(`/recordsearch/${nickname}?page=${pageNumber - 1}`);
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    useEffect(() => {
        articleDetailGet(articleId)
            .then((res) => {
                setArticleDetail(res.result);
                setComments(res.result.comments);
                setLoading(false);
            })
            .catch((error) => {
                console.error('에러가 발생하였습니다:', error);
            });
    }, []);

    return (
        <ArticleContainer>
            <StyledArticle>
                <StyledArticleContent>
                    {articleDetail ? (
                        <>
                            <StyledArticleHeader>
                                {articleDetail.category === 'FREE'
                                    ? '자유 게시판'
                                    : articleDetail.category === 'TIP'
                                    ? '팁 게시판'
                                    : '회사 게시판'}
                            </StyledArticleHeader>
                            <StyledArticleTop> {articleDetail.title}</StyledArticleTop>
                            작성자 : {articleDetail.nickname} | 작성 일자 : {articleDetail.createdAt} | 조회 수 :
                            {articleDetail.viewCount}
                            <StyledArticleBody>
                                {articleDetail.imgUrl && (
                                    <Image src={articleDetail.imgUrl} width={375} height={375} alt="업로드 이미지" />
                                )}
                                {articleDetail.content}
                            </StyledArticleBody>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                    <StyledArticleComment>
                        <StyledCommentHeader>
                            댓글
                            <StyledCommentTop>
                                <Input
                                    font_size="17px"
                                    type="text"
                                    style={{ border: '1px solid gray', borderRadius: '5px', width: '90%' }}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <Button use="blue" label="작성" style={{ width: '10%' }} onClick={saveComment} />
                            </StyledCommentTop>
                            <StyledComment>
                                <p>작성자</p>
                                <p>댓글</p>
                                <p>작성 일시</p>
                            </StyledComment>
                        </StyledCommentHeader>
                        <StyledCommentBody>
                            {loading ? (
                                <div>Loading...</div>
                            ) : comments['comments'] ? (
                                comments['comments'].map((comment: any, index: number) => (
                                    <StyledComment key={index}>
                                        <p>{comment.nickname}</p>
                                        <p>{comment.content}</p>
                                        <p>{comment.createdAt}</p>
                                    </StyledComment>
                                ))
                            ) : (
                                <div>댓글이 없습니다</div>
                            )}
                        </StyledCommentBody>
                        <StyledPageContainer>
                            {Array.from({ length: comments?.totalPage }, (_, index) => index + 1).map((pageNumber) => (
                                <StyledPageContent onClick={() => handlePageClick(pageNumber)} key={pageNumber}>
                                    {pageNumber}
                                </StyledPageContent>
                            ))}
                        </StyledPageContainer>
                    </StyledArticleComment>
                </StyledArticleContent>
                <StyledRightContent>
                    <RightBar />
                </StyledRightContent>
            </StyledArticle>
        </ArticleContainer>
    );
};

export default Article;
