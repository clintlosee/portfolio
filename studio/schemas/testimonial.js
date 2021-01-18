export default {
    "type": "object",
    "name": "testimonial",
    "title": "Testimonial",
    "fields": [
        {
            "type": "string",
            "name": "author",
            "title": "Author",
            "description": "The author of the testimonial.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "avatar",
            "title": "Avatar",
            "description": "The avatar of the testimonial author.",
            "validation": null
        },
        {
            "type": "string",
            "name": "content",
            "title": "Content",
            "description": "The text content of the testimonial.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "testimonial"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "author"
        }
    }
}