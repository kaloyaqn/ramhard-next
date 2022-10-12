import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "bc5owe4x",
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: "skWbipqk01RrdAVqfGVnv4WyakOj412DhXs1h1TyC3fYkS8CD6wVavP2EfbggEx0sF0dERq0KHK964D1ge27HFq3cnsZvArTs7k07M8X6poz1y8bOIle5aod1vu91wW8H0mP1ymyvGMKL8Zq9yCLcQjfNPE1diuS6x8rMjmV4JbpqRpVe7Op",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default function Client() {
    return (
        <>
        </>
    )
}