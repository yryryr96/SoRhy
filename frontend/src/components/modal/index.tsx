import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../button';
import {
    StyledModalWrapper,
    StyledModal,
    StyledBigText,
    ModalHeader,
    ModalCenter,
    TextArea,
    Label,
    Form,
    RowForm,
} from './Modal.styled';
import { ModalType } from './Modal.type';
import Input from '../input';
import Image from 'next/image';
import { SelectBox } from '@/pageComponents/articles/components/mainbar/searchbar/Searchbar.Styled';
import articleSavePost from '@/api/article/articleSavePost';
const Modal = (props: ModalType) => {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('0');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        const ArticleData = {
            title,
            content,
            companyArticle: 1,
            image,
        };
        console.log(ArticleData);
        try {
            await articleSavePost(ArticleData);
        } catch (error) {
            console.error('게시글 저장 오류', error);
        }
    };

    return props.isOpen ? (
        <StyledModalWrapper>
            <StyledModal style={{ backgroundColor: 'white', width: '700px', height: '700px' }}>
                <ModalHeader>
                    {props.imgsrc ? (
                        <img src={props.imgsrc} alt="Image from props" style={{ width: '10%', height: '5%' }} />
                    ) : (
                        <img src="/pencil_icon2.svg" alt="Default Image" style={{ width: '8%', height: '47%' }} />
                    )}
                    <p style={{ fontSize: '19px', fontWeight: 'bold' }}>글 작성</p>
                </ModalHeader>

                <StyledBigText>
                    <div className="title">{props.bigtext}</div>
                    {props.smalltext !== '' ? <div className="subtitle"> {props.smalltext} </div> : null}
                </StyledBigText>
                <ModalCenter>
                    <Form onSubmit={handleSubmit}>
                        <RowForm>
                            <Image src="/bluetitle.svg" width={19} height={19} alt="제목 사진" />
                            <Label>글 제목</Label>
                        </RowForm>

                        <TextArea value={title} rows={1} onChange={(e) => setTitle(e.target.value)} />

                        <RowForm>
                            <Image src="/blueboard.svg" width={19} height={19} alt="게시판 사진" />
                            <Label>게시판 선택</Label>
                        </RowForm>

                        <SelectBox value={selectedBoard} onChange={(e) => setSelectedBoard(e.target.value)}>
                            <option value="0">자유 게시판</option>
                            <option value="1">회사 게시판</option>
                            <option value="2">Tips</option>
                        </SelectBox>

                        <RowForm>
                            <Image src="/bluecontents.svg" width={19} height={19} alt="내용 사진" />
                            <Label>글 내용</Label>
                        </RowForm>
                        <TextArea rows={9} value={content} onChange={(e) => setContent(e.target.value)} />
                        <RowForm>
                            <Image src="/bluepicture.svg" width={19} height={19} alt="사진 첨부" />
                            <Label>사진 첨부</Label>
                        </RowForm>
                        <Input font_size="15px" type="file" onChange={(e: any) => setImage(e.target.files[0])} />
                    </Form>
                </ModalCenter>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                    <div style={{ width: '43%', height: '38px' }}>
                        <Button
                            use="blue"
                            type="submit"
                            label={props.confirm}
                            style={{ borderRadius: '5px' }}
                            onClick={async () => {
                                if (props.onConfirmClick) {
                                    await handleSubmit();
                                    props.onConfirmClick();
                                } else if (props.onDelete) {
                                    props.onDelete();
                                }
                            }}
                        />
                    </div>
                    <div style={{ width: '43%', height: '38px' }}>
                        <Button
                            use="bggray"
                            label={props.cancel}
                            style={{ borderRadius: '5px' }}
                            onClick={props.onClose}
                        />
                    </div>
                </div>
            </StyledModal>
        </StyledModalWrapper>
    ) : null;
};

export default Modal;
