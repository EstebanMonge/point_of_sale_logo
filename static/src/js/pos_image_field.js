odoo.define("point_of_sale_logo.pos_image_field", function (require) {
    "use strict";
    const Registries = require('point_of_sale.Registries');
    const Chrome = require('point_of_sale.Chrome');
    const PosLogoChrome = (Chrome) =>
        class extends Chrome {
            get imageUrl() {
                if (this.env.pos){

                    if (this.env.pos.config){
                            if (this.env.pos.config.image != false){
                                return `/web/image?model=pos.config&field=image&id=${this.env.pos.config_id}&unique=1`;


                            }else{
                                return false
                            }
                    }
                }
            }
            get isSelfInformation() {
                if (this.env.pos){
                    if (this.env.pos.config){
                            if (this.env.pos.config.pos_enable_self_information != false){
                                return true; 
                            }
                            else {
                                return false; 
                            }
                    }
                }
            }
            get selfPhone() {
                if (this.env.pos){
                    if (this.env.pos.config){
                            if (this.env.pos.config.pos_phone != false){
                                return this.env.pos.config.pos_phone;
                            }
                            else {
                                return false;
                            }
                    }
                }
            }
            get selfName() {
                if (this.env.pos){
                    if (this.env.pos.config){
                            if (this.env.pos.config.pos_name != false){
                                return this.env.pos.config.pos_name;
                            }
                            else {
                                return false;
                            }
                    }
                }
            }
        };
    Registries.Component.extend(Chrome, PosLogoChrome);
    return Chrome;
});
