import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getQuizes } from '../apis/getQuizes'
import { QuizData } from '../types/QuizData';

const QuizScreen = ({ navigation }: any) => {
    const [quizes, setQuizes] = useState<QuizData[] | []>([
        {
            "id": 53177,
            "date": "2025-01-12T12:25:24",
            "date_gmt": "2025-01-12T06:55:24",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=53177"
            },
            "modified": "2025-01-12T13:12:26",
            "modified_gmt": "2025-01-12T07:42:26",
            "slug": "national-youth-day-quiz-2025",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/",
            "title": {
                "rendered": "National Youth Day Quiz 2025"
            },
            "author": 1,
            "featured_media": 53188,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-53177",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "has-post-thumbnail",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>National Youth Day Quiz 2025 - School on Mobile</title>\n<meta name=\"description\" content=\"Participate in the Youth Day Quiz 2025 and test your knowledge on youth achievements, history, and more. Celebrate the spirit of youth with this exciting quiz!\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"National Youth Day Quiz 2025 - School on Mobile\" />\n<meta property=\"og:description\" content=\"Participate in the Youth Day Quiz 2025 and test your knowledge on youth achievements, history, and more. Celebrate the spirit of youth with this exciting quiz!\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2025-01-12T07:42:26+00:00\" />\n<meta property=\"og:image\" content=\"https://som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg\" />\n\t<meta property=\"og:image:width\" content=\"1080\" />\n\t<meta property=\"og:image:height\" content=\"1080\" />\n\t<meta property=\"og:image:type\" content=\"image/jpeg\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"1 minute\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/\",\"url\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/\",\"name\":\"National Youth Day Quiz 2025 - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#primaryimage\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#primaryimage\"},\"thumbnailUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg?fit=1080%2C1080&ssl=1\",\"datePublished\":\"2025-01-12T06:55:24+00:00\",\"dateModified\":\"2025-01-12T07:42:26+00:00\",\"description\":\"Participate in the Youth Day Quiz 2025 and test your knowledge on youth achievements, history, and more. Celebrate the spirit of youth with this exciting quiz!\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#primaryimage\",\"url\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg?fit=1080%2C1080&ssl=1\",\"contentUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg?fit=1080%2C1080&ssl=1\",\"width\":1080,\"height\":1080,\"caption\":\"National Youth Day Quiz\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"National Youth Day Quiz 2025\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "National Youth Day Quiz 2025 - School on Mobile",
                "description": "Participate in the Youth Day Quiz 2025 and test your knowledge on youth achievements, history, and more. Celebrate the spirit of youth with this exciting quiz!",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "National Youth Day Quiz 2025 - School on Mobile",
                "og_description": "Participate in the Youth Day Quiz 2025 and test your knowledge on youth achievements, history, and more. Celebrate the spirit of youth with this exciting quiz!",
                "og_url": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2025-01-12T07:42:26+00:00",
                "og_image": [
                    {
                        "width": 1080,
                        "height": 1080,
                        "url": "https://som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg",
                        "type": "image/jpeg"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "twitter_misc": {
                    "Est. reading time": "1 minute"
                },
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/",
                            "url": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/",
                            "name": "National Youth Day Quiz 2025 - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "primaryImageOfPage": {
                                "@id": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#primaryimage"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#primaryimage"
                            },
                            "thumbnailUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg?fit=1080%2C1080&ssl=1",
                            "datePublished": "2025-01-12T06:55:24+00:00",
                            "dateModified": "2025-01-12T07:42:26+00:00",
                            "description": "Participate in the Youth Day Quiz 2025 and test your knowledge on youth achievements, history, and more. Celebrate the spirit of youth with this exciting quiz!",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#primaryimage",
                            "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg?fit=1080%2C1080&ssl=1",
                            "contentUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2025/01/Colorful-Illustrative-Happy-Teachers-Day-Greeting-Instagram-Post.jpg?fit=1080%2C1080&ssl=1",
                            "width": 1080,
                            "height": 1080,
                            "caption": "National Youth Day Quiz"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/national-youth-day-quiz-2025/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "National Youth Day Quiz 2025"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/53177",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/1"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=53177"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media/53188"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=53177"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8548,
            "date": "2024-09-04T21:37:48",
            "date_gmt": "2024-09-04T16:07:48",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8548"
            },
            "modified": "2024-09-09T11:19:00",
            "modified_gmt": "2024-09-09T05:49:00",
            "slug": "teachers-day-2024-quiz",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/",
            "title": {
                "rendered": "TEACHERS DAY 2024 QUIZ"
            },
            "author": 35,
            "featured_media": 7887,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8548",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "has-post-thumbnail",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>TEACHERS DAY 2024 QUIZ - School on Mobile</title>\n<meta name=\"description\" content=\"&quot;Celebrate Teachers&#039; Day with our special quiz! Challenge yourself with questions that honor the contributions of educators and explore the history and significance of teaching. Perfect for students, teachers, and anyone who values education.&quot;\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"TEACHERS DAY 2024 QUIZ - School on Mobile\" />\n<meta property=\"og:description\" content=\"&quot;Celebrate Teachers&#039; Day with our special quiz! Challenge yourself with questions that honor the contributions of educators and explore the history and significance of teaching. Perfect for students, teachers, and anyone who values education.&quot;\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-09-09T05:49:00+00:00\" />\n<meta property=\"og:image\" content=\"https://som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg\" />\n\t<meta property=\"og:image:width\" content=\"250\" />\n\t<meta property=\"og:image:height\" content=\"313\" />\n\t<meta property=\"og:image:type\" content=\"image/jpeg\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"1 minute\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/\",\"url\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/\",\"name\":\"TEACHERS DAY 2024 QUIZ - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#primaryimage\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#primaryimage\"},\"thumbnailUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg?fit=250%2C313&ssl=1\",\"datePublished\":\"2024-09-04T16:07:48+00:00\",\"dateModified\":\"2024-09-09T05:49:00+00:00\",\"description\":\"\\\"Celebrate Teachers' Day with our special quiz! Challenge yourself with questions that honor the contributions of educators and explore the history and significance of teaching. Perfect for students, teachers, and anyone who values education.\\\"\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#primaryimage\",\"url\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg?fit=250%2C313&ssl=1\",\"contentUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg?fit=250%2C313&ssl=1\",\"width\":250,\"height\":313,\"caption\":\"Teachers Day\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"TEACHERS DAY 2024 QUIZ\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "TEACHERS DAY 2024 QUIZ - School on Mobile",
                "description": "\"Celebrate Teachers' Day with our special quiz! Challenge yourself with questions that honor the contributions of educators and explore the history and significance of teaching. Perfect for students, teachers, and anyone who values education.\"",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "TEACHERS DAY 2024 QUIZ - School on Mobile",
                "og_description": "\"Celebrate Teachers' Day with our special quiz! Challenge yourself with questions that honor the contributions of educators and explore the history and significance of teaching. Perfect for students, teachers, and anyone who values education.\"",
                "og_url": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-09-09T05:49:00+00:00",
                "og_image": [
                    {
                        "width": 250,
                        "height": 313,
                        "url": "https://som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg",
                        "type": "image/jpeg"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "twitter_misc": {
                    "Est. reading time": "1 minute"
                },
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/",
                            "url": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/",
                            "name": "TEACHERS DAY 2024 QUIZ - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "primaryImageOfPage": {
                                "@id": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#primaryimage"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#primaryimage"
                            },
                            "thumbnailUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg?fit=250%2C313&ssl=1",
                            "datePublished": "2024-09-04T16:07:48+00:00",
                            "dateModified": "2024-09-09T05:49:00+00:00",
                            "description": "\"Celebrate Teachers' Day with our special quiz! Challenge yourself with questions that honor the contributions of educators and explore the history and significance of teaching. Perfect for students, teachers, and anyone who values education.\"",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#primaryimage",
                            "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg?fit=250%2C313&ssl=1",
                            "contentUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/09/teachers-day-poster-e1599274910879.jpeg?fit=250%2C313&ssl=1",
                            "width": 250,
                            "height": 313,
                            "caption": "Teachers Day"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/teachers-day-2024-quiz/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "TEACHERS DAY 2024 QUIZ"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8548",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/35"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8548"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media/7887"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8548"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8293,
            "date": "2024-08-12T23:42:55",
            "date_gmt": "2024-08-12T18:12:55",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8293"
            },
            "modified": "2024-09-09T11:14:49",
            "modified_gmt": "2024-09-09T05:44:49",
            "slug": "independence-day-2024-quiz",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/",
            "title": {
                "rendered": "INDEPENDENCE DAY 2024 QUIZ"
            },
            "author": 35,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8293",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>INDEPENDENCE DAY 2024 QUIZ - School on Mobile</title>\n<meta name=\"description\" content=\"टीचर्स ऑफ़ बिहार : द चेंज मेकर्स समूह के द्वारा राष्ट्रीय त्योहार स्वतंत्रता दिवस के अवसर पर 15 अगस्त, 15 प्रश्न एवं 15 मिनट आधारित इस क्विज में आपका स्वागत है।\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"INDEPENDENCE DAY 2024 QUIZ - School on Mobile\" />\n<meta property=\"og:description\" content=\"टीचर्स ऑफ़ बिहार : द चेंज मेकर्स समूह के द्वारा राष्ट्रीय त्योहार स्वतंत्रता दिवस के अवसर पर 15 अगस्त, 15 प्रश्न एवं 15 मिनट आधारित इस क्विज में आपका स्वागत है।\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-09-09T05:44:49+00:00\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"250\" />\n\t<meta property=\"og:image:height\" content=\"100\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/\",\"url\":\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/\",\"name\":\"INDEPENDENCE DAY 2024 QUIZ - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"datePublished\":\"2024-08-12T18:12:55+00:00\",\"dateModified\":\"2024-09-09T05:44:49+00:00\",\"description\":\"टीचर्स ऑफ़ बिहार : द चेंज मेकर्स समूह के द्वारा राष्ट्रीय त्योहार स्वतंत्रता दिवस के अवसर पर 15 अगस्त, 15 प्रश्न एवं 15 मिनट आधारित इस क्विज में आपका स्वागत है।\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"INDEPENDENCE DAY 2024 QUIZ\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "INDEPENDENCE DAY 2024 QUIZ - School on Mobile",
                "description": "टीचर्स ऑफ़ बिहार : द चेंज मेकर्स समूह के द्वारा राष्ट्रीय त्योहार स्वतंत्रता दिवस के अवसर पर 15 अगस्त, 15 प्रश्न एवं 15 मिनट आधारित इस क्विज में आपका स्वागत है।",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "INDEPENDENCE DAY 2024 QUIZ - School on Mobile",
                "og_description": "टीचर्स ऑफ़ बिहार : द चेंज मेकर्स समूह के द्वारा राष्ट्रीय त्योहार स्वतंत्रता दिवस के अवसर पर 15 अगस्त, 15 प्रश्न एवं 15 मिनट आधारित इस क्विज में आपका स्वागत है।",
                "og_url": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-09-09T05:44:49+00:00",
                "og_image": [
                    {
                        "width": 250,
                        "height": 100,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1",
                        "type": "image/png"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/",
                            "url": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/",
                            "name": "INDEPENDENCE DAY 2024 QUIZ - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "datePublished": "2024-08-12T18:12:55+00:00",
                            "dateModified": "2024-09-09T05:44:49+00:00",
                            "description": "टीचर्स ऑफ़ बिहार : द चेंज मेकर्स समूह के द्वारा राष्ट्रीय त्योहार स्वतंत्रता दिवस के अवसर पर 15 अगस्त, 15 प्रश्न एवं 15 मिनट आधारित इस क्विज में आपका स्वागत है।",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/independence-day-2024-quiz/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "INDEPENDENCE DAY 2024 QUIZ"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8293",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/35"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8293"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8293"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8277,
            "date": "2024-06-20T12:29:36",
            "date_gmt": "2024-06-20T06:59:36",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8277"
            },
            "modified": "2024-06-22T07:25:36",
            "modified_gmt": "2024-06-22T01:55:36",
            "slug": "mai-hu-yogdoot-quiz-competition",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/",
            "title": {
                "rendered": "मैं हूं योगदूत"
            },
            "author": 35,
            "featured_media": 8283,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8277",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "has-post-thumbnail",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>मैं हूं योगदूत - School on Mobile</title>\n<meta name=\"description\" content=\"21 जून 2024 को अंतर्राष्ट्रीय योग दिवस के अवसर पर बिहार की सबसे बड़ी प्रोफेशनल लर्निंग कम्युनिटी टीचर्स ऑफ़ बिहार द्वारा आयोजित योगदूत 2024 एक्सक्लूसिव क्विज में भाग लें और प्राप्त करें ई-सर्टिफिकेट।\" />\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"मैं हूं योगदूत - School on Mobile\" />\n<meta property=\"og:description\" content=\"21 जून 2024 को अंतर्राष्ट्रीय योग दिवस के अवसर पर बिहार की सबसे बड़ी प्रोफेशनल लर्निंग कम्युनिटी टीचर्स ऑफ़ बिहार द्वारा आयोजित योगदूत 2024 एक्सक्लूसिव क्विज में भाग लें और प्राप्त करें ई-सर्टिफिकेट।\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-06-22T01:55:36+00:00\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"1080\" />\n\t<meta property=\"og:image:height\" content=\"1080\" />\n\t<meta property=\"og:image:type\" content=\"image/jpeg\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"1 minute\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/\",\"url\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/\",\"name\":\"मैं हूं योगदूत - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#primaryimage\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#primaryimage\"},\"thumbnailUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1\",\"datePublished\":\"2024-06-20T06:59:36+00:00\",\"dateModified\":\"2024-06-22T01:55:36+00:00\",\"description\":\"21 जून 2024 को अंतर्राष्ट्रीय योग दिवस के अवसर पर बिहार की सबसे बड़ी प्रोफेशनल लर्निंग कम्युनिटी टीचर्स ऑफ़ बिहार द्वारा आयोजित योगदूत 2024 एक्सक्लूसिव क्विज में भाग लें और प्राप्त करें ई-सर्टिफिकेट।\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#primaryimage\",\"url\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1\",\"contentUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1\",\"width\":1080,\"height\":1080,\"caption\":\"International Yoga Day\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"मैं हूं योगदूत\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "मैं हूं योगदूत - School on Mobile",
                "description": "21 जून 2024 को अंतर्राष्ट्रीय योग दिवस के अवसर पर बिहार की सबसे बड़ी प्रोफेशनल लर्निंग कम्युनिटी टीचर्स ऑफ़ बिहार द्वारा आयोजित योगदूत 2024 एक्सक्लूसिव क्विज में भाग लें और प्राप्त करें ई-सर्टिफिकेट।",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "मैं हूं योगदूत - School on Mobile",
                "og_description": "21 जून 2024 को अंतर्राष्ट्रीय योग दिवस के अवसर पर बिहार की सबसे बड़ी प्रोफेशनल लर्निंग कम्युनिटी टीचर्स ऑफ़ बिहार द्वारा आयोजित योगदूत 2024 एक्सक्लूसिव क्विज में भाग लें और प्राप्त करें ई-सर्टिफिकेट।",
                "og_url": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-06-22T01:55:36+00:00",
                "og_image": [
                    {
                        "width": 1080,
                        "height": 1080,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1",
                        "type": "image/jpeg"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "twitter_misc": {
                    "Est. reading time": "1 minute"
                },
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/",
                            "url": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/",
                            "name": "मैं हूं योगदूत - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "primaryImageOfPage": {
                                "@id": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#primaryimage"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#primaryimage"
                            },
                            "thumbnailUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1",
                            "datePublished": "2024-06-20T06:59:36+00:00",
                            "dateModified": "2024-06-22T01:55:36+00:00",
                            "description": "21 जून 2024 को अंतर्राष्ट्रीय योग दिवस के अवसर पर बिहार की सबसे बड़ी प्रोफेशनल लर्निंग कम्युनिटी टीचर्स ऑफ़ बिहार द्वारा आयोजित योगदूत 2024 एक्सक्लूसिव क्विज में भाग लें और प्राप्त करें ई-सर्टिफिकेट।",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#primaryimage",
                            "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1",
                            "contentUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-20-at-12.05.59.jpeg?fit=1080%2C1080&ssl=1",
                            "width": 1080,
                            "height": 1080,
                            "caption": "International Yoga Day"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/mai-hu-yogdoot-quiz-competition/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "मैं हूं योगदूत"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8277",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/35"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8277"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media/8283"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8277"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8250,
            "date": "2024-02-14T20:06:11",
            "date_gmt": "2024-02-14T14:36:11",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8250"
            },
            "modified": "2024-02-14T20:29:36",
            "modified_gmt": "2024-02-14T14:59:36",
            "slug": "english-9-10",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/english-9-10/",
            "title": {
                "rendered": "English 9-10"
            },
            "author": 44,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8250",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>English 9-10 - School on Mobile</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/english-9-10/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"English 9-10 - School on Mobile\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/english-9-10/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-02-14T14:59:36+00:00\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"250\" />\n\t<meta property=\"og:image:height\" content=\"100\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/english-9-10/\",\"url\":\"https://som.teachersofbihar.org/quiz/english-9-10/\",\"name\":\"English 9-10 - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"datePublished\":\"2024-02-14T14:36:11+00:00\",\"dateModified\":\"2024-02-14T14:59:36+00:00\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/english-9-10/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/english-9-10/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/english-9-10/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"English 9-10\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "English 9-10 - School on Mobile",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/english-9-10/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "English 9-10 - School on Mobile",
                "og_url": "https://som.teachersofbihar.org/quiz/english-9-10/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-02-14T14:59:36+00:00",
                "og_image": [
                    {
                        "width": 250,
                        "height": 100,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1",
                        "type": "image/png"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/english-9-10/",
                            "url": "https://som.teachersofbihar.org/quiz/english-9-10/",
                            "name": "English 9-10 - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "datePublished": "2024-02-14T14:36:11+00:00",
                            "dateModified": "2024-02-14T14:59:36+00:00",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/english-9-10/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/english-9-10/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/english-9-10/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "English 9-10"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8250",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/44"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8250"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8250"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8242,
            "date": "2024-02-11T20:40:49",
            "date_gmt": "2024-02-11T15:10:49",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8242"
            },
            "modified": "2024-02-11T21:06:51",
            "modified_gmt": "2024-02-11T15:36:51",
            "slug": "%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/",
            "title": {
                "rendered": "बिहार CURRENT AFFAIRS"
            },
            "author": 39,
            "featured_media": 8096,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8242",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "has-post-thumbnail",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>बिहार CURRENT AFFAIRS - School on Mobile</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/बिहार-current-affairs/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"बिहार CURRENT AFFAIRS - School on Mobile\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/बिहार-current-affairs/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-02-11T15:36:51+00:00\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"940\" />\n\t<meta property=\"og:image:height\" content=\"788\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"1 minute\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/\",\"url\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/\",\"name\":\"बिहार CURRENT AFFAIRS - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#primaryimage\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#primaryimage\"},\"thumbnailUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1\",\"datePublished\":\"2024-02-11T15:10:49+00:00\",\"dateModified\":\"2024-02-11T15:36:51+00:00\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#primaryimage\",\"url\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1\",\"contentUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1\",\"width\":940,\"height\":788,\"caption\":\"SAKSHAMTA PARIKSHA\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"बिहार CURRENT AFFAIRS\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "बिहार CURRENT AFFAIRS - School on Mobile",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/बिहार-current-affairs/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "बिहार CURRENT AFFAIRS - School on Mobile",
                "og_url": "https://som.teachersofbihar.org/quiz/बिहार-current-affairs/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-02-11T15:36:51+00:00",
                "og_image": [
                    {
                        "width": 940,
                        "height": 788,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1",
                        "type": "image/png"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "twitter_misc": {
                    "Est. reading time": "1 minute"
                },
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/",
                            "url": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/",
                            "name": "बिहार CURRENT AFFAIRS - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "primaryImageOfPage": {
                                "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#primaryimage"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#primaryimage"
                            },
                            "thumbnailUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1",
                            "datePublished": "2024-02-11T15:10:49+00:00",
                            "dateModified": "2024-02-11T15:36:51+00:00",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#primaryimage",
                            "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1",
                            "contentUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/Navy-Professional-Webinar-Facebook-Post.png?fit=940%2C788&ssl=1",
                            "width": 940,
                            "height": 788,
                            "caption": "SAKSHAMTA PARIKSHA"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-current-affairs/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "बिहार CURRENT AFFAIRS"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8242",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/39"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8242"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media/8096"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8242"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8239,
            "date": "2024-02-11T14:20:55",
            "date_gmt": "2024-02-11T08:50:55",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8239"
            },
            "modified": "2024-02-11T14:20:55",
            "modified_gmt": "2024-02-11T08:50:55",
            "slug": "%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/",
            "title": {
                "rendered": "सामान्य ज्ञान मॉडल पेपर 6"
            },
            "author": 39,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8239",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>सामान्य ज्ञान मॉडल पेपर 6 - School on Mobile</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/सामान्य-ज्ञान-मॉडल-पेपर-6/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"सामान्य ज्ञान मॉडल पेपर 6 - School on Mobile\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/सामान्य-ज्ञान-मॉडल-पेपर-6/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"250\" />\n\t<meta property=\"og:image:height\" content=\"100\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/\",\"url\":\"https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/\",\"name\":\"सामान्य ज्ञान मॉडल पेपर 6 - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"datePublished\":\"2024-02-11T08:50:55+00:00\",\"dateModified\":\"2024-02-11T08:50:55+00:00\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"सामान्य ज्ञान मॉडल पेपर 6\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "सामान्य ज्ञान मॉडल पेपर 6 - School on Mobile",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/सामान्य-ज्ञान-मॉडल-पेपर-6/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "सामान्य ज्ञान मॉडल पेपर 6 - School on Mobile",
                "og_url": "https://som.teachersofbihar.org/quiz/सामान्य-ज्ञान-मॉडल-पेपर-6/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "og_image": [
                    {
                        "width": 250,
                        "height": 100,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1",
                        "type": "image/png"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/",
                            "url": "https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/",
                            "name": "सामान्य ज्ञान मॉडल पेपर 6 - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "datePublished": "2024-02-11T08:50:55+00:00",
                            "dateModified": "2024-02-11T08:50:55+00:00",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/%e0%a4%b8%e0%a4%be%e0%a4%ae%e0%a4%be%e0%a4%a8%e0%a5%8d%e0%a4%af-%e0%a4%9c%e0%a5%8d%e0%a4%9e%e0%a4%be%e0%a4%a8-%e0%a4%ae%e0%a5%89%e0%a4%a1%e0%a4%b2-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-6/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "सामान्य ज्ञान मॉडल पेपर 6"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8239",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/39"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8239"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8239"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8231,
            "date": "2024-02-11T13:11:35",
            "date_gmt": "2024-02-11T07:41:35",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8231"
            },
            "modified": "2024-02-11T13:11:35",
            "modified_gmt": "2024-02-11T07:41:35",
            "slug": "bihar-samanya-gyan",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/",
            "title": {
                "rendered": "बिहार सामान्य ज्ञान"
            },
            "author": 33,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8231",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>बिहार सामान्य ज्ञान - School on Mobile</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"बिहार सामान्य ज्ञान - School on Mobile\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"250\" />\n\t<meta property=\"og:image:height\" content=\"100\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/\",\"url\":\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/\",\"name\":\"बिहार सामान्य ज्ञान - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"datePublished\":\"2024-02-11T07:41:35+00:00\",\"dateModified\":\"2024-02-11T07:41:35+00:00\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"बिहार सामान्य ज्ञान\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "बिहार सामान्य ज्ञान - School on Mobile",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "बिहार सामान्य ज्ञान - School on Mobile",
                "og_url": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "og_image": [
                    {
                        "width": 250,
                        "height": 100,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2020/05/som_logo_tranparent-1.png?fit=250%2C100&ssl=1",
                        "type": "image/png"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/",
                            "url": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/",
                            "name": "बिहार सामान्य ज्ञान - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "datePublished": "2024-02-11T07:41:35+00:00",
                            "dateModified": "2024-02-11T07:41:35+00:00",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/bihar-samanya-gyan/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "बिहार सामान्य ज्ञान"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8231",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/33"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8231"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8231"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8233,
            "date": "2024-02-11T08:09:12",
            "date_gmt": "2024-02-11T02:39:12",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8233"
            },
            "modified": "2024-02-11T11:17:15",
            "modified_gmt": "2024-02-11T05:47:15",
            "slug": "english-grammar-quiz-jumbled-sentences-9th-10th",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/",
            "title": {
                "rendered": "ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th)"
            },
            "author": 35,
            "featured_media": 8234,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8233",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "has-post-thumbnail",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th) - School on Mobile</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th) - School on Mobile\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-02-11T05:47:15+00:00\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"355\" />\n\t<meta property=\"og:image:height\" content=\"224\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"1 minute\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/\",\"url\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/\",\"name\":\"ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th) - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#primaryimage\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#primaryimage\"},\"thumbnailUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1\",\"datePublished\":\"2024-02-11T02:39:12+00:00\",\"dateModified\":\"2024-02-11T05:47:15+00:00\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#primaryimage\",\"url\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1\",\"contentUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1\",\"width\":355,\"height\":224},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th)\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th) - School on Mobile",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th) - School on Mobile",
                "og_url": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-02-11T05:47:15+00:00",
                "og_image": [
                    {
                        "width": 355,
                        "height": 224,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1",
                        "type": "image/png"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "twitter_misc": {
                    "Est. reading time": "1 minute"
                },
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/",
                            "url": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/",
                            "name": "ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th) - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "primaryImageOfPage": {
                                "@id": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#primaryimage"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#primaryimage"
                            },
                            "thumbnailUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1",
                            "datePublished": "2024-02-11T02:39:12+00:00",
                            "dateModified": "2024-02-11T05:47:15+00:00",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#primaryimage",
                            "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1",
                            "contentUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/3.png?fit=355%2C224&ssl=1",
                            "width": 355,
                            "height": 224
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/english-grammar-quiz-jumbled-sentences-9th-10th/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "ENGLISH GRAMMAR QUIZ (JUMBLED SENTENCES )9th-10th)"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8233",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/35"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8233"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media/8234"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8233"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 8232,
            "date": "2024-02-10T22:54:42",
            "date_gmt": "2024-02-10T17:24:42",
            "guid": {
                "rendered": "https://som.teachersofbihar.org/?post_type=qsm_quiz&#038;p=8232"
            },
            "modified": "2024-02-11T11:10:08",
            "modified_gmt": "2024-02-11T05:40:08",
            "slug": "samanya-gyan-model-paper-5",
            "status": "publish",
            "type": "qsm_quiz",
            "link": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/",
            "title": {
                "rendered": "सामान्य ज्ञान मॉडल पेपर 5"
            },
            "author": 39,
            "featured_media": 8210,
            "comment_status": "open",
            "ping_status": "closed",
            "template": "",
            "class_list": [
                "post-8232",
                "qsm_quiz",
                "type-qsm_quiz",
                "status-publish",
                "has-post-thumbnail",
                "hentry"
            ],
            "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v24.3 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>सामान्य ज्ञान मॉडल पेपर 5 - School on Mobile</title>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<link rel=\"canonical\" href=\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/\" />\n<meta property=\"og:locale\" content=\"en_US\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"सामान्य ज्ञान मॉडल पेपर 5 - School on Mobile\" />\n<meta property=\"og:url\" content=\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/\" />\n<meta property=\"og:site_name\" content=\"School on Mobile\" />\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/Biharkeshikshak\" />\n<meta property=\"article:modified_time\" content=\"2024-02-11T05:40:08+00:00\" />\n<meta property=\"og:image\" content=\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1\" />\n\t<meta property=\"og:image:width\" content=\"1080\" />\n\t<meta property=\"og:image:height\" content=\"1080\" />\n\t<meta property=\"og:image:type\" content=\"image/jpeg\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<meta name=\"twitter:site\" content=\"@teachersofbihar\" />\n<meta name=\"twitter:label1\" content=\"Est. reading time\" />\n\t<meta name=\"twitter:data1\" content=\"1 minute\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/\",\"url\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/\",\"name\":\"सामान्य ज्ञान मॉडल पेपर 5 - School on Mobile\",\"isPartOf\":{\"@id\":\"https://som.teachersofbihar.org/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#primaryimage\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#primaryimage\"},\"thumbnailUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1\",\"datePublished\":\"2024-02-10T17:24:42+00:00\",\"dateModified\":\"2024-02-11T05:40:08+00:00\",\"breadcrumb\":{\"@id\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#primaryimage\",\"url\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1\",\"contentUrl\":\"https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1\",\"width\":1080,\"height\":1080},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://som.teachersofbihar.org/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Quizzes\",\"item\":\"https://som.teachersofbihar.org/quiz/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"सामान्य ज्ञान मॉडल पेपर 5\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://som.teachersofbihar.org/#website\",\"url\":\"https://som.teachersofbihar.org/\",\"name\":\"School on Mobile\",\"description\":\"Teachers of Bihar- The Change Maker\",\"publisher\":{\"@id\":\"https://som.teachersofbihar.org/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://som.teachersofbihar.org/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://som.teachersofbihar.org/#organization\",\"name\":\"Teachers of Bihar\",\"url\":\"https://som.teachersofbihar.org/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\",\"url\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"contentUrl\":\"http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png\",\"width\":250,\"height\":100,\"caption\":\"Teachers of Bihar\"},\"image\":{\"@id\":\"https://som.teachersofbihar.org/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/Biharkeshikshak\",\"https://x.com/teachersofbihar\",\"https://www.instagram.com/teachersofbihar/\",\"https://www.linkedin.com/company/teachersofbihar\",\"https://in.pinterest.com/Teachersofbihar/\",\"https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ\"]}]}</script>\n<!-- / Yoast SEO plugin. -->",
            "yoast_head_json": {
                "title": "सामान्य ज्ञान मॉडल पेपर 5 - School on Mobile",
                "robots": {
                    "index": "index",
                    "follow": "follow",
                    "max-snippet": "max-snippet:-1",
                    "max-image-preview": "max-image-preview:large",
                    "max-video-preview": "max-video-preview:-1"
                },
                "canonical": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/",
                "og_locale": "en_US",
                "og_type": "article",
                "og_title": "सामान्य ज्ञान मॉडल पेपर 5 - School on Mobile",
                "og_url": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/",
                "og_site_name": "School on Mobile",
                "article_publisher": "https://www.facebook.com/Biharkeshikshak",
                "article_modified_time": "2024-02-11T05:40:08+00:00",
                "og_image": [
                    {
                        "width": 1080,
                        "height": 1080,
                        "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1",
                        "type": "image/jpeg"
                    }
                ],
                "twitter_card": "summary_large_image",
                "twitter_site": "@teachersofbihar",
                "twitter_misc": {
                    "Est. reading time": "1 minute"
                },
                "schema": {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/",
                            "url": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/",
                            "name": "सामान्य ज्ञान मॉडल पेपर 5 - School on Mobile",
                            "isPartOf": {
                                "@id": "https://som.teachersofbihar.org/#website"
                            },
                            "primaryImageOfPage": {
                                "@id": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#primaryimage"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#primaryimage"
                            },
                            "thumbnailUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1",
                            "datePublished": "2024-02-10T17:24:42+00:00",
                            "dateModified": "2024-02-11T05:40:08+00:00",
                            "breadcrumb": {
                                "@id": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                                {
                                    "@type": "ReadAction",
                                    "target": [
                                        "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/"
                                    ]
                                }
                            ]
                        },
                        {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#primaryimage",
                            "url": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1",
                            "contentUrl": "https://i0.wp.com/som.teachersofbihar.org/wp-content/uploads/2024/02/SAKSHAMTA-PARIKSHA.jpeg?fit=1080%2C1080&ssl=1",
                            "width": 1080,
                            "height": 1080
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://som.teachersofbihar.org/quiz/samanya-gyan-model-paper-5/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://som.teachersofbihar.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Quizzes",
                                    "item": "https://som.teachersofbihar.org/quiz/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "सामान्य ज्ञान मॉडल पेपर 5"
                                }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://som.teachersofbihar.org/#website",
                            "url": "https://som.teachersofbihar.org/",
                            "name": "School on Mobile",
                            "description": "Teachers of Bihar- The Change Maker",
                            "publisher": {
                                "@id": "https://som.teachersofbihar.org/#organization"
                            },
                            "potentialAction": [
                                {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "https://som.teachersofbihar.org/?s={search_term_string}"
                                    },
                                    "query-input": {
                                        "@type": "PropertyValueSpecification",
                                        "valueRequired": true,
                                        "valueName": "search_term_string"
                                    }
                                }
                            ],
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://som.teachersofbihar.org/#organization",
                            "name": "Teachers of Bihar",
                            "url": "https://som.teachersofbihar.org/",
                            "logo": {
                                "@type": "ImageObject",
                                "inLanguage": "en-US",
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/",
                                "url": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "contentUrl": "http://som.local/wp-content/uploads/2020/05/som_logo_tranparent.png",
                                "width": 250,
                                "height": 100,
                                "caption": "Teachers of Bihar"
                            },
                            "image": {
                                "@id": "https://som.teachersofbihar.org/#/schema/logo/image/"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Biharkeshikshak",
                                "https://x.com/teachersofbihar",
                                "https://www.instagram.com/teachersofbihar/",
                                "https://www.linkedin.com/company/teachersofbihar",
                                "https://in.pinterest.com/Teachersofbihar/",
                                "https://www.youtube.com/channel/UCxyqpOA9qTkagY2mVORnRgQ"
                            ]
                        }
                    ]
                }
            },
            "jetpack_likes_enabled": true,
            "jetpack_sharing_enabled": true,
            "_links": {
                "self": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz/8232",
                        "targetHints": {
                            "allow": [
                                "GET"
                            ]
                        }
                    }
                ],
                "collection": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz"
                    }
                ],
                "about": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/types/qsm_quiz"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/users/39"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/comments?post=8232"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media/8210"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://som.teachersofbihar.org/wp-json/wp/v2/media?parent=8232"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        }
    ]);
    // useEffect(() => {
    //     const fetchQuizes = async () => {
    //         await getQuizes().then(res => {
    //             console.log(res);
    //             setQuizes(res);
    //         })
    //     }

    //     fetchQuizes();
    // }, [])
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <FlatList
                data={quizes}
                renderItem={({ item: quiz }) => {
                    return (
                        <View>
                            <View key={quiz.id} style={styles.quizCardContainer}>
                                <View>
                                    <Text style={styles.quizTitle}>{quiz.title.rendered}</Text>
                                    <Text numberOfLines={5} lineBreakMode='tail' style={styles.quizDescription}>{quiz.yoast_head_json.schema['@graph'][0].description}</Text>
                                </View>
                                <Image source={{ uri: quiz.yoast_head_json.schema['@graph'][0].thumbnailUrl }} style={styles.poster} />
                            </View>
                            <View style={styles.cardButtonView}>
                                <TouchableOpacity style={styles.readButton}>
                                    <Text>Read</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
            {/* r */}
        </View>
    )
}

export default QuizScreen;

const styles = StyleSheet.create({
    quizCardContainer: {
        flex: 1,
        margin: 20,
        marginBottom: 0,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 999,
        borderWidth: 2,
        borderColor: '#341539',
    },
    quizTitle: {
        width: 200,
        fontWeight: '600',
        fontSize: 16,
    },
    quizDescription: {
        width: 200,
        fontSize: 10,
        marginTop: 15,
    },
    cardButtonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'relative',
        height: 70,
        backgroundColor: '#341539', 
        marginHorizontal: 20,
        paddingTop: 30,
        bottom: 20,
        padding: 20,
        paddingBottom: 10,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    readButton: {
        backgroundColor: 'white',
        textAlign: 'center',
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    poster: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#341539',
    }
})