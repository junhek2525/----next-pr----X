import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player';
import lottiejson from '/public/mainpage.json';
import stlyes from './mainpage.module.css';
import { useRouter } from 'next/router';

export default function Mainpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/projects');
    };
    return (
        <>
            
            <Grid container spacing={1}>
                <Grid size={6}>
                    <div className={stlyes.introduce}>
                        <h2 style={{fontSize:'45px'}}>안녕하세요</h2>
                        {/* <p>안녕하세요, 저는 [이름]입니다. 현재 [직업/전공]으로 [회사/학교]에서 [직무/학업]을 하고 있습니다. [출신 지역] 출신으로, [경력/전공/특징]을 바탕으로 [관련 분야]에 대한 깊은 관심과 열정을 가지고 있습니다.
                            저는 [특징/성격]하고 [취미/관심사]를 좋아하며, [과거 경험/프로젝트]을 통해 [성과/교훈]을 얻었습니다. 이러한 경험을 바탕으로 [미래 목표/비전]을 가지고 있으며, 앞으로도 [목표/계획]을 이루기 위해 지속적으로 노력할 것입니다.
                            저는 팀워크와 소통을 중요시하며, 항상 새로운 도전과 배움을 즐깁니다. 여러분과 함께 성장하고 발전할 기회를 가지게 되어 기쁩니다. 감사합니다.</p> */}
                            <p>안녕하세요 저는 충주상업고등학교에 스마트IT를 다니고 있는 유준혁 입니다. 저는 C언어 C# C++ python entry unity java javascript html 를 할줄 압니다 저의 장점은 프로그래밍을 잘하고 상상력과 창의성이 높습니다</p>
                        <Button variant="contained" onClick={handleClick}>테스트 버튼</Button>
                    </div>
                </Grid>
                <Grid size={1.7}>
                    <div ><Lottie loop animationData={lottiejson} play style={{width : 150, height : 150}}/></div>
                    
                </Grid>
            </Grid>

        </>
    )
}