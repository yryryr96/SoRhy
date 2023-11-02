'use client';

import FreeBoard from './components/freeboard';
import CompanyBoard from './components/companyboard';
import Tips from './components/tips';

const Contents = (props: any) => {
    const path = props.selectbtn;

    return (
        <>
            {path === '1' && <FreeBoard />}
            {path === '2' && <CompanyBoard />}
            {path === '3' && <Tips />}
            {/* {path === '4' && <BugReport />} */}
        </>
    );
};

export default Contents;
