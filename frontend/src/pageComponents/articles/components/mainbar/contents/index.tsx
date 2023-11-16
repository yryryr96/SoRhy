'use client';

import FreeBoard from './components/freeboard';
import CompanyBoard from './components/companyboard';
import Tips from './components/tips';
import Searching from './components/searching';
const Contents = (props: any) => {
    const path = props.selectbtn;

    return (
        <>
            {path === '1' && <FreeBoard category="FREE" />}
            {path === '2' && <CompanyBoard category="COMPANY" />}
            {path === '3' && <Tips category="TIP" />}
            {path === '4' && <Searching />}
        </>
    );
};

export default Contents;
