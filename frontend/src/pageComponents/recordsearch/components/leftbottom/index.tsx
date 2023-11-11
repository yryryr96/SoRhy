'use client';

import {
    StyledLeftBottomContainer,
    StyledBottomHeader,
    StyledBottomBody,
    StyledCharContent,
} from './LeftBottom.Styled';
import Image from 'next/image';
const LeftBottom = (props: any) => {
    const { top3Characters } = props;

    return (
        <StyledLeftBottomContainer>
            <StyledBottomHeader>
                <Image
                    src="/cuteflower.svg"
                    width={35}
                    height={35}
                    alt="내 최애 캐릭터"
                    style={{ borderRadius: '20px' }}
                />
                내 최애 캐릭터는?
            </StyledBottomHeader>
            <StyledBottomBody>
                <StyledCharContent>
                {top3Characters.map((character : any , index : number) => (
                    <StyledCharContent key={index}>
                        <Image
                            src={`/chr${character.characterId}.png`}
                            width={35}
                            height={35}
                            alt={`내 최애 캐릭터 ${index + 1}`}
                            style={{ borderRadius: '20px' }}
                        />
                       
                        {`${character.characterName}`}
                    </StyledCharContent>
                ))}
                </StyledCharContent>
            </StyledBottomBody>
        </StyledLeftBottomContainer>
    );
};

export default LeftBottom;
