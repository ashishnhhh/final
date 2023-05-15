const express = require("express");
const router = express.Router();

const{getdata, getCollegeCodeId, getDistrict, getCollegeName} = require("../controllers/datas");

router.route("/").get(getdata);
router.route("/getCollegeCodeId").get(getCollegeCodeId);
router.route("/getDistrict").get(getDistrict);
router.route("/getCollegeName").get(getCollegeName);

module.exports = router;