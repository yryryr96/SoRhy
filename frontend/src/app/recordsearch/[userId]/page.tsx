'use client';

import RecordSearch from '@/pageComponents/recordsearch';

export default function recordSearchPage({ params }: { params: { userId: string } }) {
    return <RecordSearch userId={params.userId} />;
}
