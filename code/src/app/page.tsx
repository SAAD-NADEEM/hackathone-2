import { redirect } from 'next/navigation';

function page() {
    redirect('/(home)'); // Redirect to your actual home page
    return null;
};

export default page;