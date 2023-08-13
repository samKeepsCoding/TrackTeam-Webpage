import pressCard from "./pressCard";

export default {
    name: 'aboutPage',
    title: 'About Page Content',
    type: 'document',
    fields: [
        {
            name: 'bio',
            title: 'Bio',
            type: 'text'
        },
        {
            name: 'pressCard',
            title: 'Press',
            type: 'array',
            of: [{type: 'pressCard'}]
        }
    ]
}