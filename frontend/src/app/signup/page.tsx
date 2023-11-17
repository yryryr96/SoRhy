import { Metadata } from 'next';
import Signup from '@/pageComponents/signup';

export const metadata: Metadata = {
    title: 'SignUp',
};

export default function SignUp() {
    return (
        <>
            <Signup></Signup>
        </>
    );
}
