'use client';
import React, { useEffect } from 'react';
import DefaultComponent from './DefaultComponent';

const MidComponent = (props: any) => {
    const pathname = props.pathname;

    return <DefaultComponent pathname={pathname} />;
};

export default MidComponent;
