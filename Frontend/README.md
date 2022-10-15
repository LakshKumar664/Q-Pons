port : 3001
backend link : https://63ab-2400-adc1-420-7e00-d1a8-e86e-16fe-d3b8.in.ngrok.io

seller table = user
buyer table = buyer
coupon table = coupondetails

APIS:
/login => to login the seller
/listCoupons/:id => to list the coupons generated by a seller
/Signup => to signup for seller
/buyer_login => login for buyer
/updatePass => to update the password for seller
/postInsta => to post to insta given filename as string
/insert => to insert the coupon data (details)
/upload => to insert coupon data (img as well as details)
/uploadFlyer
/addTemplate
/getPotentialBuyers/:id : id = coupon_id
/getPotentialCoupons/:id : id = buyer_id
/uploadImg : to set template img (designer side)
/sendEmail : to send email
/coupons : to fetch all coupons
/getMailingList:id : to fetch mailing list of buyers given a seller id