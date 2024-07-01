import { defineType, defineField, defineArrayMember } from 'sanity'

export const article = defineType({
    type: "document",
    name: "article",
    fields: [
        defineField({
            type: "string",
            name: "title",
        }),
        defineField({
            type: "slug",
            name: "slug",
            options: { source: "title" },
        }),
        defineField({
            type: "text",
            name: "description",
        }),
        defineField({
            type: 'image',
            name: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            type: 'array',
            name: 'content',
            of: [{ type: 'block' }]
        }),
        defineField({
            type: "array",
            name: "categories",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "category" }],
                }),
            ],
        }),
    ],
});
