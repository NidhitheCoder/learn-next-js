import Head from "next/head";
import { useRouter } from "next/router";

export default function Cars({ car }) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Head>
                <title>{car.color} {car.id}</title>
            </Head>
            <h1>hello {id} </h1>
            <p>{car.color}</p>
            <img src={car.image} />
        </div>
    )
}

// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/cars.json')
//     const cars = await res.json()

//     const paths = cars.map((car) => ({
//         params: { id: car.id.toString() },
//     }))


//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { car: data }
//     }

// }

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {
            car: data,
        }
    }
}