export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        
    ]
}