import rn from "random-number"

var gen = rn.generator({
  min:  100000
, max:  1000000
, integer: true
})

const productsData = [
  {
    men: {
    
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400012923109_CAMO?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400012923109_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400012923109_A1?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "Reese Cooper",
      productNameDescription: "Camo-Print Cargo Pants",
      productPrice: 162,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400014547450_OFFWHITEBLACK?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400014547450_OFFWHITEBLACK_A3?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400014547450_OFFWHITEBLACK_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "Palm Angels X Missoni",
      productNameDescription: "These track pants feature a classic elastic waist and color block print down the side of each leg.",
      productPrice: 575,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400014374520_SLATE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400012923109_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400012923109_A1?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "ATM Anthony Thomas Melillo",
      productNameDescription: "Drawstring Waist Sweatpants",
      productPrice: 198,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400014547529_MELANGEGREY?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400014547529_MELANGEGREY_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400014547529_MELANGEGREY_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "Palm Angels X Missoni",
      productNameDescription: "These knitted trackpants feature a classic elastic waistband.",
      productPrice: 845,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400013988879_BLACK?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400013988879_BLACK_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400013988879_BLACK_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "Versace",
      productNameDescription: "Bold logo detailing defines these soft cotton sweatpants for a signature look.",
      productPrice: 650,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400014534144_MULTI?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400014534144_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400014534144_MULTI_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "DOLCE&GABBANA",
      productNameDescription: "ONLY AT SAKS. A signature lemon tile print covers this pair of flat-front trousers woven from stretch cotton.",
      productPrice: 1295,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400014372595_BLACKPARAKEET?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400014372595_BLACKPARAKEET_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400014372595_BLACKPARAKEET_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "Bottega Veneta",
      productNameDescription: "Bold contrast panels elongate the silhouette of these tailored tech sweatpants.",
      productPrice: 1100,
    },
  },
  {
    men: {
        productId: gen,
      category: "Sweatpants",
      subCategory: "Casual Pants",
      imgUrl:
        "https://image.s5a.com/is/image/saks/0400014359600_ALPINE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      subImageUrl: {
        imgZero:
          "https://image.s5a.com/is/image/saks/0400014359600_ALPINE_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        imgOne:
          "https://image.s5a.com/is/image/saks/0400014359600_ALPINE_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
      },
      productName: "Helmut Lang",
      productNameDescription: "Cargo pant-style detailing adds style to these relaxed cotton sweatpants.",
      productPrice: 325,
    },
  },
];

export default productsData;
