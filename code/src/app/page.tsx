import { redirect } from 'next/navigation';

function page() {
    redirect('/(Home)'); // Redirect to your actual home page
    return null;
};

export default page;