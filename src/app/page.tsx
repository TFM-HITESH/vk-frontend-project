import DesignsSection from '@/designs/DesignsSection'
import FeedbackSection from '@/designs/FeedbackSection'
import FooterSection from '@/designs/FooterSection'
import Image from 'next/image'

export default function Home() {
    return (
        <main>
          
            <DesignsSection />
            <FeedbackSection />
            <FooterSection />
        </main>
    )
}
