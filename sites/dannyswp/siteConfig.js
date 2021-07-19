export default {
    "id": "tv",
    "name": "Thailand Villas",
    "shortName": "Thailand Villas",
    "websiteUrl": "https://www.thailand-villas.com",
    "baseUrl": "https://thailandvillas.rentivo.net",
    "dynamicPropertyPages": false,
    "noIndex": false,
    "currency": {
        "defaultCurrency": "USD",
        "supportedCurrencies": ["GBP", "EUR", "USD", "AUD", "THB", "AED", "HKD", "RUB", "SGD"]
    },
    "site": {
        "logo": {
            "useImage": true,
            "text": "Thailand Villas",
            "image": {
                "width": 152,
                "height": 32,
                "types": {
                    "default": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                    "defaultMobile": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                    "light": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                    "lightMobile": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                    "dark": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                    "darkMobile": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg"
                }
            }
        },
        "icons": {
            "16": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/fav-32.png",
            "32": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/fav-32.png",
            "48": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/fav-48.png",
            "128": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/fav-128.png"
        },
        "cookies": {
            "active": true,
            "policyUrl": "/privacy/"
        },
        "api": {
            "lycan": {
                "channelId": "88eb154c-e326-42a3-b6e4-0e610d8ef5ad",
                "host": "https://lycan.rentivo.com",
                "sendCurrencyOnPriceRequests": true
            },
            "googleApiKey": "AIzaSyBpUyxFM1ORsk7scdoW54MtLiq1pfFYFMw",
            "tracking": {
                "debug": false,
                "environments": ["production"],
                "googleAnalytics": {
                    "active": true,
                    "head": true,
                    "trackingId": "UA-16384787-9",
                    "autoStart": true,
                    "anonymize": true,
                    "cookieFlags": "secure;samesite=none"
                },
                "googleAds": {
                    "active": false,
                    "head": true,
                    "trackingId": "YOUR_GOOGLE_ADS_TRACKING_ID",
                    "anonymize": true,
                    "cookieFlags": "secure;samesite=none"
                },
                "hotjar": {
                    "active": false,
                    "head": true,
                    "trackingId": "YOUR_HOTJAR_ID",
                    "snippetVersion": "6"
                },
                "facebookPixel": {
                    "active": false,
                    "head": true,
                    "autoStart": true,
                    "trackingId": "381136572357133"
                },
                "sentry": {
                    "enabled": []
                }
            },
            "cdn": {
                "provider": "IMAGEKIT",
                "options": {
                    "publicKey": "xGRvTtVgg0R+rXlLusIq8Vr/Xmk=",
                    "urlEndpoint": "https://ik.imagekit.io/rentivo/core"
                }
            },
            "map": {
                "provider": "MAPBOX",
                "mapKey": "pk.eyJ1IjoicmVudGl2byIsImEiOiJja2FxaHQxdG8yODRuMnNwNmpqNTV2M2o4In0.njQ19c1SlCWJjUq4gZ_3Bg",
                "mapStyle": "mapbox://styles/mapbox/streets-v11"
            }
        },
        "sharing": {
            "ogImage": "http://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/villa7294-dining.jpg",
            "twitterImage": "http://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/villa7294-dining.jpg"
        },
        "structuredData": {
            "organization": {
                "name": "Thailand Villas",
                "legalName": "Thailand Villas",
                "url": "https://www.thailand-villas.com",
                "logo": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                "foundingDate": "2001",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "email": "reservations@eatsandretreats.com"
                },
                "sameAs": []
            },
            "brand": {
                "name": "Thailand Villas",
                "url": "https://www.thailand-villas.com",
                "logo": "https://thailandvillas.rentivo.net/wp-content/uploads/sites/4/2020/07/logo-1.svg",
                "sameAs": []
            }
        },
        "content": {
            "variables": {
                "sep": "—",
                "siteTitle": "Thailand Villas"
            }
        },
        "design": {
            "fonts": {

            }
        },
        "formatting": {
            "fullDate": "Do MMM YY"
        },
        "countries": {
            "important": ["GB", "US"],
            "include": [],
            "exclude": []
        }
    },
    "search": {
        "collections": {
            "rootCollectionDatabaseId": 284
        },
        "results": {
            "perPage": 12,
            "totalHits": 5000,
            "openInNewTab": false,
            "includeDiscounts": true
        },
        "map": {
            "placeNames": {
                "usePlaceNames": false
            },
            "isOpenOnLoad": false,
            "defaultZoom": 3,
            "maxZoom": 20,
            "minZoom": 1,
            "useFuzzyRadius": false,
            "fuzzyRadius": 200,
            "searchMapOnMoveDefault": true,
            "defaultCenter": {
                "lat": 15.870032,
                "lng": 100.992538
            }
        },
        "filters": {
            "los": {
                "active": true,
                "showFilter": true,
                "urlParam": "los",
                "defaultValue": "no"
            },
            "availability": {
                "active": true,
                "urlParam": "availability",
                "defaultValue": null,
                "showFilter": true,
                "minNights": 1,
                "listensTo": ["los", "guests", "price"]
            },
            "availabilityIn": {
                "active": true,
                "urlParam": "availability_in",
                "defaultValue": null,
                "showFilter": true,
                "listensTo": ["availability"]
            },
            "location": {
                "active": true,
                "urlParam": "location",
                "defaultValue": null,
                "showFilter": true,
                "type": "COLLECTION_CASCADE",
                "bias": {
                    "countries": ["TH"],
                    "types": null,
                    "radius": 0
                }
            },
            "bedrooms": {
                "active": true,
                "urlParam": "bedrooms",
                "defaultValue": 0,
                "showFilter": true,
                "min": 0,
                "max": 12,
                "queryFormat": "~"
            },
            "beds": {
                "active": true,
                "urlParam": "beds",
                "defaultValue": 0,
                "showFilter": true,
                "min": 0,
                "max": 24,
                "queryFormat": "~"
            },
            "bathrooms": {
                "active": true,
                "urlParam": "bathrooms",
                "defaultValue": 0,
                "showFilter": true,
                "min": 0,
                "max": 12,
                "queryFormat": "~"
            },
            "guests": {
                "active": true,
                "urlParam": "guests",
                "defaultValue": 0,
                "showFilter": true,
                "min": 0,
                "max": 24,
                "queryFormat": "gte",
                "guestsPicker": true
            },
            "adults": {
                "active": true,
                "urlParam": "adults",
                "defaultValue": 0,
                "showFilter": false,
                "countsToTotal": true,
                "dependsOn": "guests"
            },
            "children": {
                "active": true,
                "urlParam": "children",
                "defaultValue": 0,
                "countsToTotal": true,
                "showFilter": false,
                "dependsOn": "guests"
            },
            "infants": {
                "active": true,
                "urlParam": "infants",
                "defaultValue": 0,
                "countsToTotal": false,
                "showFilter": false,
                "dependsOn": "guests"
            },
            "pets": {
                "active": true,
                "urlParam": "pets",
                "defaultValue": 0,
                "countsToTotal": false,
                "showFilter": true,
                "queryFormat": "gte",
                "useQuery": true
            },
            "price": {
                "active": true,
                "urlParam": "price",
                "defaultValue": [0, 12000],
                "showFilter": true,
                "sliderStep": 5,
                "histogramInterval": 1200,
                "showHistogram": true,
                "listensTo": ["los"]
            },
            "flags": {
                "active": true,
                "showFilter": true,
                "urlParam": "flags",
                "options": [
                    {
                        "urlValue": "featured",
                        "value": "isFeatured"
                    }
                ],
                "defaultValue": []
            },
            "discounts": {
                "active": true,
                "showFilter": true,
                "urlParam": "discounts",
                "options": [
                    {
                        "urlValue": "last_minute",
                        "value": "LAST_MINUTE"
                    },
                    {
                        "urlValue": "early_bird",
                        "value": "EARLY_BIRD"
                    }
                ],
                "defaultValue": []
            },
            "type": {
                "active": true,
                "urlParam": "type",
                "defaultValue": [],
                "showFilter": true,
                "nestedField": null,
                "field": "listing.type.keyword",
                "options": [
                    {
                        "urlValue": "villa",
                        "value": "LISTING_TYPE_VILLA"
                    },
                    {
                        "urlValue": "apartment",
                        "value": "LISTING_TYPE_APARTMENT"
                    }
                ]
            },
            "suitability": {
                "active": true,
                "urlParam": "suitability",
                "defaultValue": [],
                "nestedField": "features",
                "field": "features.type.keyword",
                "showFilter": true,
                "options": [
                    {
                        "urlValue": "children",
                        "value": "SUITABILITY_CHILDREN_WELCOME"
                    },
                    {
                        "urlValue": "elderly",
                        "value": "SUITABILITY_ACCESSIBILITY_ELDERLY_GREAT"
                    },
                    {
                        "urlValue": "pet_friendly",
                        "value": "SUITABILITY_PETS_ALLOWED"
                    },
                    {
                        "urlValue": "smoking",
                        "value": "SUITABILITY_SMOKING_ALLOWED"
                    },
                    {
                        "urlValue": "wedding",
                        "value": "SUITABILITY_WEDDINGS_WELCOME"
                    },
                    {
                        "urlValue": "wheelchairs",
                        "value": "SUITABILITY_ACCESSIBILITY_WHEELCHAIR_GREAT"
                    }
                ]
            },
            "features": {
                "active": true,
                "urlParam": "features",
                "defaultValue": [],
                "showFilter": true,
                "nestedField": "features",
                "field": "features.type.keyword",
                "options": [
                    {
                        "urlValue": "near_the_beach",
                        "value": "LOCALITY_BEACH_VIEWS"
                    },
                    {
                        "urlValue": "on_the_beach",
                        "value": "LOCALITY_BEACH_FRONT"
                    },
                    {
                        "urlValue": "sea_views",
                        "value": "LOCALITY_OCEAN_VIEWS"
                    },
                    {
                        "urlValue": "city",
                        "value": "LOCALITY_CITY"
                    },
                    {
                        "urlValue": "countryside",
                        "value": "LOCALITY_COUNTRYSIDE"
                    },
                    {
                        "urlValue": "lakeside",
                        "value": "LOCALITY_LAKE_FRONT"
                    },
                    {
                        "urlValue": "mountain_views",
                        "value": "LOCALITY_MOUNTAIN_VIEWS"
                    },
                    {
                        "urlValue": "near_golf",
                        "value": "LOCALITY_GOLF_COURSE"
                    },
                    {
                        "urlValue": "chef",
                        "value": "GENERAL_COOK"
                    },
                    {
                        "urlValue": "internet",
                        "value": "COMMUNICATION_INTERNET"
                    },
                    {
                        "urlValue": "maid",
                        "value": "GENERAL_MAID_ROOMS"
                    },
                    {
                        "urlValue": "private_pool",
                        "value": "SPA_POOL_SWIMMING_POOL"
                    },
                    {
                        "urlValue": "security",
                        "value": "SAFETY_SAFETY_CARD"
                    },

                    {
                        "urlValue": "balinese",
                        "value": "CUSTOM_DESIGN_BALINESE"
                    },
                    {
                        "urlValue": "colonial_style",
                        "value": "CUSTOM_DESIGN_COLONIAL_STYLE"
                    },
                    {
                        "urlValue": "contemporary",
                        "value": "CUSTOM_DESIGN_CONTEMPORARY"
                    },
                    {
                        "urlValue": "fusion_design",
                        "value": "CUSTOM_DESIGN_FUSION_DESIGN"
                    },
                    {
                        "urlValue": "mediterranean",
                        "value": "CUSTOM_DESIGN_MEDITERRANEAN"
                    },
                    {
                        "urlValue": "rustic",
                        "value": "CUSTOM_DESIGN_RUSTIC"
                    },
                    {
                        "urlValue": "thai_style",
                        "value": "CUSTOM_DESIGN_THAI_STYLE"
                    },
                    {
                        "urlValue": "traditional",
                        "value": "CUSTOM_DESIGN_TRADITIONAL"
                    },
                    {
                        "urlValue": "tropical",
                        "value": "CUSTOM_DESIGN_TROPICAL"
                    }
                ]
            },
            "keyword": {
                "active": true,
                "urlParam": "keyword",
                "defaultValue": null,
                "showFilter": true
            },
            "sort": {
                "active": true,
                "urlParam": "sort_by",
                "showFilter": true,
                "defaultValue": "RELEVANCE_ASC",
                "options": [
                    {
                        "urlValue": "relevance",
                        "value": "RELEVANCE_ASC"
                    },
                    {
                        "urlValue": "nightly_price_asc",
                        "value": "NIGHTLY_PRICE_ASC"
                    },
                    {
                        "urlValue": "nightly_price_desc",
                        "value": "NIGHTLY_PRICE_DESC"
                    },
                    {
                        "urlValue": "sleeps_asc",
                        "value": "SLEEPS_ASC"
                    },
                    {
                        "urlValue": "sleeps_desc",
                        "value": "SLEEPS_DESC"
                    },
                    {
                        "urlValue": "latest",
                        "value": "CREATED_AT_DESC"
                    }
                ]
            },
            "page": {
                "active": true,
                "showFilter": true,
                "urlParam": "page",
                "defaultValue": 1,
                "marginPagesDisplayed": 1,
                "pageRangeDisplayed": 5
            }
        },
        "elasticSearch": {
            "app": "lycan_main.thailand_villas_gatsby.properties_h14wdv",
            "credentials": "thailand_villas:password",
            "url": "https://search.es.rentivo.com:9243",
            "size": 12
        },
        "elasticSearchDvr": {
            "app": "lycan_main.dvr_website.properties_0wyc6m",
            "credentials": "discoveryvacationrentals:password",
            "url": "https://search.es.rentivo.com:9243",
            "size": 12
        },
        "elasticSearchDormoa": {
            "app": "lycan_main.dormoa.properties_b70dyt",
            "credentials": "dormoa:password",
            "url": "https://search.es.rentivo.com:9243",
            "size": 12
        },
        "elasticSearchLoveCottages": {
            "app": "lovecottages_shared_from_lycan_main_cluster.love_cottages_development.properties_5mz0f4",
            "credentials": "lovecottages:password",
            "url": "https://search.es.rentivo.com:9243",
            "size": 12
        }
    },
    "property": {
        "headline": {
            "showSubtitle": true
        },
        "price": {
            "type": "PRICE_RANGE",
            "period": "WEEKLY"
        },
        "pricing": {
            "actions": {
                "enquiryDisplayMode": "ON_ANY_RESPONSE",
                "requestToBookDisplayMode": "ON_SUCCESSFUL_PRICE_INCLUDING_ENQUIRY"
            },
            "minNights": 1,
            "maxNights": 91,
            "data": {
                "guests": {
                    "urlParam": "guests",
                    "defaultValue": 0,
                    "min": 0,
                    "max": 48
                },
                "adults": {
                    "active": true,
                    "urlParam": "adults",
                    "countsToTotal": true,
                    "defaultValue": 0,
                    "min": 0,
                    "max": 24
                },
                "children": {
                    "active": true,
                    "urlParam": "children",
                    "countsToTotal": true,
                    "defaultValue": 0,
                    "min": 0,
                    "max": 24
                },
                "infants": {
                    "active": true,
                    "urlParam": "infants",
                    "countsToTotal": false,
                    "defaultValue": 0,
                    "min": 0,
                    "max": 24
                },
                "pets": {
                    "active": true,
                    "urlParam": "pets",
                    "countsToTotal": false,
                    "defaultValue": 0,
                    "min": 0,
                    "max": 10
                },
                "startDate": {
                    "urlParam": "check_in"
                },
                "endDate": {
                    "urlParam": "check_out"
                },
                "nights": {
                    "urlParam": "nights"
                }
            }
        },
        "map": {
            "defaultZoom": 14,
            "maxZoom": 20,
            "minZoom": 1,
            "useFuzzyRadius": false,
            "fuzzyRadius": 200,
            "useCustomMarker": false,
            "customMarker": {
                "offsetLeft": -12,
                "offsetTop": -24,
                "imageURL": "http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png",
                "imageWidth": 24,
                "imageHeight": 24
            }
        }
    },
    "checkout": {
        "payment": {
            "defaultAcceptedPaymentBrands": ["visa", "mastercard", "amex"]
        },
        "info": {
            "phoneRequired": false
        },
        "success": {
            "reservationIdPath": "reservationId"
        },
        "messageToAgent": {
            "active": true,
            "required": false
        },
        "enquiryModal": {
            "active": true
        },
        "checkboxes": {
            "showMarketingOptIn": false,
            "showTermsAndConditions": true,
            "showPrivacyPolicy": true,
            "defaultPrivacyPolicy": "/privacy/",
            "defaultTermsAndConditions": "/terms/"
        }
    },
    "routePaths": {
        "ROUTE_BASE_SEARCH": "rentals",
        "ROUTE_BASE_PROPERTY": "rent",
        "ROUTE_BASE_CHECKOUT": "checkout",
        "ROUTE_BASE_CHECKOUT_REVIEW": "review",
        "ROUTE_BASE_CHECKOUT_GUEST_INFO": "info",
        "ROUTE_BASE_CHECKOUT_CONFIRM": "confirm",
        "ROUTE_BASE_CHECKOUT_SUCCESS": "success",
        "ROUTE_BASE_POSTS": "blog",
        "ROUTE_BASE_POSTS_CATEGORIES": "categories",
        "ROUTE_BASE_POSTS_TAGS": "tags",
        "ROUTE_BASE_POSTS_AUTHOR": "author",
        "ROUTE_PATH_HOME": "",
        "ROUTE_BASE_NOT_FOUND": "404",
        "ROUTE_BASE_CUSTOMER_CONTACT": "contact",
        "ROUTE_BASE_BUSINESS_CONTACT": "contact/business"
    },
    "theme": {
        "id": "barcelona",
        "variables": {
            "base": {
                "body-background": "#fff",
                "component-background": "#fff",
                "primary-color": "#108294",
                "error-color": "#ff8469",
                "info-color": "#fbd46d",
                "success-color": "#52c41a",
                "text-color": "#030f17",
                "text-color-secondary": "#38343f",
                "heading-color": "#030f17",
                "link-color": "#108294",
                "normal-color": "#d9d9d9",
                "item-hover-bg": "#f5f5f5",
                "background-color-light": "#f5f5f5",
                "background-color-base": "#fafafa",
                "link-decoration": "none",
                "link-hover-decoration": "none",

                "shadow-color": "rgba(0, 0, 0, 0.15)",
                "box-shadow-base": "0 0.23rem 1.09rem rgba(8,10,37,.03), 0 0.465rem 0.70rem rgba(8,10,37,.03), 0 0.125rem 0.265rem rgba(8,10,37,.05), 0 0.0625rem 0.0935rem rgba(8,10,37,.03)",

                "font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "code-family": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
                "font-size-base": "16px",
                "font-size-lg": "19px",
                "font-size-sm": "14px",
                "line-height-base": "1.5715",
                "heading-1-size": "34px",
                "heading-2-size": "28px",
                "heading-3-size": "24px",
                "heading-4-size": "20px",

                "typography-title-margin-top": "1.2em",
                "typography-title-margin-bottom": "0.5em",

                "border-radius-base": "6px",
                "border-width-base": "1px",
                "border-color-base": "#d9d9d9",
                "border-color-split": "#d9d9d9",
                "border-color-inverse": "#ffffff",

                "padding-lg": "24px",
                "padding-md": "16px",
                "padding-sm": "12px",
                "padding-xs": "8px",

                "screen-xs": "480px",
                "screen-sm": "576px",
                "screen-md": "768px",
                "screen-lg": "992px",
                "screen-xl": "1200px",
                "screen-xxl": "1600px",

                "layout-header-height": "60px",

                "btn-border-radius-base": "0",
                "btn-border-radius-sm": "0",
                "btn-font-weight": "600",
                "btn-shadow": "none",
                "btn-primary-shadow": "none",
                "btn-text-shadow": "none",

                "btn-padding-horizontal-base": "16px",
                "btn-padding-horizontal-lg": "16px",
                "btn-padding-horizontal-sm": "8px",
                "btn-height-base": "40px",
                "btn-height-lg": "48px",
                "btn-height-sm": "30px",
                "btn-font-size-sm": "15px",

                "popover-bg": "#ffffff",
                "popover-min-width": "200px",
                "popover-arrow-width": "14px",
                "popover-arrow-color": "#ffffff",
                "popover-arrow-outer-color": "#ffffff",
                "popover-distance": "16px",


                "dropdown-vertical-padding": "5px",
                "dropdown-edge-child-vertical-padding": "4px",
                "dropdown-line-height": "22px",
                "dropdown-selected-color": "#f5f5f5",

                "select-item-selected-font-weight": "600",
                "select-dropdown-bg": "#ffffff",
                "select-item-selected-bg": "#f5f5f5",
                "select-background": "#ffffff",
                "select-clear-background": "#ffffff",
                "select-selection-item-bg": "#f5f5f5",
                "select-selection-item-border-color": "#f0f0f0",

                "checkbox-size": "20px",
                "checkbox-color": "#108294",
                "checkbox-check-color": "#ffffff",
                "checkbox-border-width": "2px",

                "input-height-base": "40px",
                "input-height-lg": "48px",
                "input-height-sm": "30px",
                "input-padding-horizontal": "16px",
                "input-padding-horizontal-base": "16px",
                "input-padding-horizontal-sm": "8px",
                "input-padding-horizontal-lg": "16px",
                "input-placeholder-color": "#aaaaaa",
                "input-bg": "#ffffff",

                "animation-duration-slow": "0.2s",
                "animation-duration-base": "0.3s",
                "animation-duration-fast": "0.1s",
                "ease-base-out": "cubic-bezier(0.7, 0.3, 0.1, 1)",
                "ease-base-in": "cubic-bezier(0.9, 0, 0.3, 0.7)",
                "ease-out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
                "ease-in": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
                "ease-in-out": "cubic-bezier(0.645, 0.045, 0.355, 1)",
                "ease-out-back": "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
                "ease-in-back": "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
                "ease-in-out-back": "cubic-bezier(0.71, -0.46, 0.29, 1.46)",
                "ease-out-circ": "cubic-bezier(0.08, 0.82, 0.17, 1)",
                "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.34)",
                "ease-in-out-circ": "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
                "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
                "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
                "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",

                "menu-inline-toplevel-item-height": "36px",
                "menu-item-height": "36px",
                "menu-collapsed-width": "80px",
                "menu-bg": "#ffffff",
                "menu-popup-bg": "#ffffff",
                "menu-item-color": "#030f17",
                "menu-highlight-color": "#108294",
                "menu-item-active-bg": "#ebf9f9",
                "menu-item-active-border-width": "0",
                "menu-item-group-title-color": "#38343f",
                "menu-item-vertical-margin": "2px",
                "menu-item-font-size": "17px",
                "menu-item-boundary-margin": "0",
                "menu-dark-color": "rgba(0,0,0,0.65)",
                "menu-dark-bg": "#001529",
                "menu-dark-arrow-color": "#fff",
                "menu-dark-submenu-bg": "#000c17",
                "menu-dark-highlight-color": "#fff",
                "menu-dark-item-active-bg": "#ebf9f9",
                "menu-dark-selected-item-icon-color": "#ffffff",
                "menu-dark-selected-item-text-color": "#ffffff",
                "menu-dark-item-hover-bg": "transparent",




                "primary-hover-color": "#17a2b8",
                "text-gray-color": "#38343f",

                "secondary-color": "#fbd46d",
                "secondary-hover-color": "#030f17",

                "btn-primary-text-color": "#ffffff",
                "btn-primary-hover-text-color": "#ffffff",
                "btn-secondary-text-color": "#030f17",
                "btn-secondary-hover-text-color": "#fbd46d",

                "btn-secondary-shadow": "none",

                "box-shadow-lg": "0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03)",

                "gray-1": "#fff",
                "gray-2": "#fafafa",
                "gray-3": "#f5f5f5",
                "gray-4": "#f0f0f0",
                "gray-5": "#d9d9d9",
                "gray-6": "#bfbfbf",
                "gray-7": "#8c8c8c",
                "gray-8": "#595959",
                "gray-9": "#434343",
                "gray-10": "#262626",
                "gray-11": "#1f1f1f",
                "gray-12": "#141414",
                "gray-13": "#000",

                "padding-xl": "32px",
                "padding-xxl": "64px",
                "padding-xxxl": "128px",
                "padding-xxs": "4px",

                "typography-letter-spacing": "0",
                "typography-font-weight": "400",
                "typography-font-weight-thick": "600",

                "heading-line-height-base": "1.2",
                "content-heading-line-height-base": "1.35",

                "heading-5-size": "17px",

                "heading-1-font-weight": "400",
                "heading-2-font-weight": "400",
                "heading-3-font-weight": "600",
                "heading-4-font-weight": "600",
                "heading-5-font-weight": "600",
                "heading-1-font-family": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                "heading-2-font-family": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                "heading-3-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "heading-4-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "heading-5-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "heading-1-letter-spacing": "0",
                "heading-2-letter-spacing": "0",
                "heading-3-letter-spacing": "0",
                "heading-4-letter-spacing": "0",
                "heading-5-letter-spacing": "0",

                "content-width": "992px",
                "content-width-wide": "1200px",
                "content-line-height-base": "1.75",
                "content-font-size-base": "17px",
                "content-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "content-letter-spacing": "0",
                "content-heading-1-size": "48px",
                "content-heading-2-size": "36px",
                "content-heading-3-size": "28px",
                "content-heading-4-size": "24px",
                "content-heading-1-font-weight": "400",
                "content-heading-2-font-weight": "400",
                "content-heading-3-font-weight": "600",
                "content-heading-4-font-weight": "600",
                "content-heading-5-font-weight": "600",
                "content-heading-1-font-family": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                "content-heading-2-font-family": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                "content-heading-3-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "content-heading-4-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "content-heading-5-font-family": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "content-heading-1-letter-spacing": "0",
                "content-heading-2-letter-spacing": "0",
                "content-heading-3-letter-spacing": "0",
                "content-heading-4-letter-spacing": "0",
                "content-heading-5-letter-spacing": "0",

                "popover-arrow-top-distance": "6px",
                "popover-arrow-bottom-distance": "10px",
                "popover-padding": "16px 24px",
                "popover-shadow": "0 0 16px rgba(0, 0, 0, 0.15)",

                "dropdown-border-radius": "7px",

                "input-border-radius": "0",
                "input-border": "1px solid #d9d9d9",
                "input-box-shadow": "none",

                "btn-primary-shadow-lg": "none",

                "calendar-default-bg-color": "#ffffff",
                "calendar-default-hover-bg-color": "#eeeeee",
                "calendar-default-color": "#030f17",
                "calendar-hovered-offset-bg-color": "#ffe3a8",
                "calendar-hovered-offset-color": "#030f17",
                "calendar-selected-span-bg-color": "#fbd46d",
                "calendar-selected-span-color": "#030f17",
                "calendar-selected-bg-color": "#fbd46d",
                "calendar-selected-color": "#030f17",
                "calendar-blocked-bg-color": "repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, #e0e0e0 3px, #d2d2d2 4px)",
                "calendar-blocked-color": "#cccccc",

                "menu-horizontal-border-bottom": "1px solid transparent",
                "menu-horizontal-border-bottom-active": "1px solid transparent",
                "menu-horizontal-side-padding": "10px",
                "menu-item-font-weight": "600",

                "fa-icon-primary": "#108294",
                "fa-icon-secondary": "#108294"
            },
            "theme": {
                "site-header-fluid": true,
                "site-header-theme": "light",
                "search-primary-filters-theme": "light",
                "search-primary-filters-height": "64px",
                "search-primary-filters-bg": "#ffffff",
                "search-primary-filters-border-bottom": "1px solid #f1f1f1",
                "search-primary-filters-box-shadow": "none",
                "search-content-bg": "#ffffff"
            }
        }
    },
    "chakraTheme": {
        "barcelona": {
            "search": {
                "defaultType": "list",
                "showViewButton": true,
                "layout": {
                    "searchArea": {
                        "mapOpen": {
                            "base": {
                                "colSpan": 24,
                                "perRow": 1,
                                "type": "grid"
                            },
                            "md": {
                                "colSpan": 14,
                                "perRow": 1,
                                "type": "grid"
                            },
                            "lg": {
                                "colSpan": 16,
                                "perRow": 2,
                                "type": "grid"
                            },
                            "xl": {
                                "colSpan": 14,
                                "perRow": 2,
                                "type": "grid"
                            },
                            "xxl": {
                                "colSpan": 12,
                                "perRow": 2,
                                "type": "grid"
                            }
                        },
                        "mapClosed": {
                            "base": {
                                "perRow": 1,
                                "type": "grid"
                            },
                            "md": {
                                "perRow": 2,
                                "type": "grid"
                            },
                            "lg": {
                                "perRow": 3,
                                "type": "grid"
                            },
                            "xl": {
                                "perRow": 4,
                                "type": "grid"
                            },
                            "xxl": {
                                "perRow": 4,
                                "type": "grid"
                            }
                        }
                    }
                }
            }
        },
        "colors": {
            "text": "#030f17",
            "textLight": "#667488",
            "link": "#108294",
            "linkHover": "#0e7585",
            "primary": {
                "50": "#f3f9fa",
                "100": "#e7f3f4",
                "200": "#c3e0e4",
                "300": "#9fcdd4",
                "400": "#58a8b4",
                "500": "#108294",
                "600": "#0e7585",
                "700": "#0c626f",
                "800": "#0a4e59",
                "900": "#084049"
            },
            "secondary": {
                "50": "#FFFDF8",
                "100": "#FFFBF0",
                "200": "#FEF4DB",
                "300": "#FDEEC5",
                "400": "#FCE199",
                "500": "#FBD46D",
                "600": "#E2BF62",
                "700": "#977F41",
                "800": "#715F31",
                "900": "#4B4021"
            }
        },
        "fontWeights": {
            "hairline": 100,
            "thin": 200,
            "light": 300,
            "normal": 400,
            "medium": 500,
            "semibold": 600,
            "bold": 700,
            "extrabold": 800,
            "black": 900
        },
        "fonts": {
            "heading": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
            "body": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            "button": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            "mono": "SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace"
        },
        "fontSizes": {
            "xs": "0.75rem",
            "sm": "0.875rem",
            "md": "1rem",
            "lg": "1.125rem",
            "xl": "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
        },
        "typography": {
            "text": {
                "fontFamily": "body"
            },
            "textWriting": {
                "fontFamily": "body"
            },
            "heading": {
                "h1": {
                    "fontFamily": "body"
                },
                "h2": {
                    "fontFamily": "body"
                },
                "h3": {
                    "fontFamily": "body"
                },
                "h4": {
                    "fontFamily": "body"
                },
                "h5": {
                    "fontFamily": "body"
                },
                "h6": {
                    "fontFamily": "body"
                }
            },
            "writingHeading": {
                "h1": {
                    "fontFamily": "heading",
                    "fontWeight": "medium"
                },
                "h2": {
                    "fontFamily": "heading",
                    "fontWeight": "medium"
                },
                "h3": {
                    "fontFamily": "body"
                },
                "h4": {
                    "fontFamily": "body"
                },
                "h5": {
                    "fontFamily": "body"
                },
                "h6": {
                    "fontFamily": "body"
                }
            }
        },
        "layerStyles": {
            "highlight": {
                "borderBottom": "2px solid",
                "bg": "secondary.200",
                "borderColor": "secondary.300",
                "color": "text",
                "fontSize": "sm",
                "display": "inline-block",
                "padding": "0 5px",
                "margin-top": "4px",
                "margin-bottom": "3px"
            }
        },
        "components": {
            "Link": {
                "baseStyle": {
                    "color": "primary.400",
                    "_hover": {
                        "textDecoration": "none",
                        "color": "primary.500"
                    },
                    "_focus": {
                        "boxShadow": "none"
                    }
                }
            },
            "Button": {
                "sizes": {
                    "lg": {
                        "fontSize": "xl",
                        "px": "32px"
                    }
                },
                "variants": {
                    "default": {
                        "bg": "#ffffff",
                        "color": "text",
                        "borderColor": "gray.200",
                        "_hover": {
                            "borderColor": "text"
                        },
                        "_focus": {
                            "borderColor": "text",
                            "boxShadow": "none"
                        },
                        "_active": {
                            "borderColor": "text",
                            "boxShadow": "none"
                        }
                    },
                    "primary": {
                        "borderColor": "primary.500",
                        "bg": "primary.500",
                        "_hover": {
                            "borderColor": "primary.400",
                            "bg": "primary.400"
                        },
                        "_focus": {
                            "borderColor": "primary.400",
                            "bg": "primary.400"
                        },
                        "_active": {
                            "borderColor": "primary.400",
                            "bg": "primary.400"
                        }
                    },
                    "secondary": {
                        "border": "1px solid #FBD46D",
                        "bg": "secondary.500",
                        "color": "text",
                        "_hover": {
                            "bg": "text",
                            "border": "1px solid #030f17"
                        },
                        "_focus": {
                            "bg": "text",
                            "border": "1px solid #030f17"
                        },
                        "_active": {
                            "bg": "text",
                            "border": "1px solid #030f17"
                        }
                    },
                    "menuLight": {
                        "bg:": "transparent",
                        "color": "text",
                        "_focus": {
                            "bg:": "primary.100",
                            "color": "text"
                        },
                        "_active": {
                            "bg:": "primary.100",
                            "color": "text"
                        },
                        "_hover": {
                            "bg:": "primary.100",
                            "color": "text"
                        }
                    }
                }
            },
            "HeaderNavbar": {
                "parts": ["header"],
                "baseStyle": {
                    "type": "light",
                    "header": {
                        "height": "60px",
                        "boxShadow": "lg",
                        "bg": "white"
                    },
                    "container": {
                        "maxW": "container.full"
                    }
                }
            }
        }

    }
};
