module.exports = {
    siteMetadata: {
        title: `Clint Losee Digital Portfolio`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Montserrat\:200,200i,400,700`,
                    `source sans pro\:200,200i,400,700`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-116645722-1",
                head: false,
                anonymize: true,
                respectDNT: true,
            },
        },
    ],
}