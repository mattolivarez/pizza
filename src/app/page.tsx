import Image from 'next/image'
 
export default function Home() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
            <Image 
                src="/nypd_no_bg.png" 
                title="NYPD Pizza" 
                alt="NYPD Pizza"
                width={500}
                height={500}
                layout="responsive"
                className="max-w-sm rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/>
            <div>
                <h1 className="text-5xl font-bold">
                Authentic New York Flavor.
                </h1>
                <p className="py-6">
                Mob-Approved.
                The Bulls and Boys in Blue-Respected.
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
            </div>
        </div>
    );
}
