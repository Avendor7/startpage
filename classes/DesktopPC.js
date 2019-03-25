"use strict"

class DesktopPC extends Devices{
    
    constructor(subnet, gateway){
        super(this.ipaddress,this.ports);

        this.subnet = subnet;
        this.gateway = gateway;
    }

    connect() {
        console.log('connected');
        
    }

}