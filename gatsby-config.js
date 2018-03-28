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
                    `Montserrat`,
                    `source sans pro\:200,200i,400,700`
                ]
            }
        }
    ],
}