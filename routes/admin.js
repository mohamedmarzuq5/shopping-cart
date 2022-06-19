var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "iPhone 13",
      category: "Mobile",
      description: "This is a good phone",
      image: `https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Apple/iphone_SE/preorder/AMZ_FamilyStripe_iphone_13_pro_max._CB626819224_.png`,
    },
    {
      name: "Samsung Galaxy S22",
      category: "Mobile",
      description: "This is a good phone",
      image: `https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0YQAJpBiTPCGc9yVK0HXkfuaykrXYPR6Nc408P3fZPhbY5dR7pDlM6fdC3_yPQWjyMhx09U3kKZg&usqp=CAc`,
    },
    {
      name: "OnePlus 10",
      category: "Mobile",
      description: "This is a good phone",
      image: `https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsRc2lotROmiSsrba0fSwY73Pxwqtg7W6ZXhPTux8Ifjkc9BLyaKT4va4UN0Vo5L4k1HHqjAQyCdg&usqp=CAc`,
    },
    {
      name: "Google Pixel 6",
      category: "Mobile",
      description: "This is a good phone",
      image: `https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVqwGuZHQ_R81BcognWMZBFeF29WfEcwx-eQBmaWPo2uVz2gpaDgX0mo7b3qtHD3_XQKHDq-VRLZE&usqp=CAc`,
    },
  ];

  res.render("admin/view-products", { admin: true, products });
});

router.get('/add-product', (req, res) => {
  res.render('admin/add-product')
});

router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
