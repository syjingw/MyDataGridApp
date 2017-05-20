import { Injectable } from '@angular/core';
import {Vulnerability} from "../data-model/vulnerability";

@Injectable()
export class VulnerabilitiesService {

  constructor() { }

  getVulnerabilities() {

     let vulnerabilities: Vulnerability[] = [
           {vulnerabilityName: 'Vulnerability in Schannel Could Allow Remote Code Execution', cveId: 'CVE-2017-3557', riskRating:'Critical', affectedInstance: 1},
           {vulnerabilityName: 'Vulnerability in HTTP.sys Could Allow Remote Code Execution', cveId: 'CVE-2017-3556', riskRating:'Critical', affectedInstance: 1},
           {vulnerabilityName: 'Vulnerability in the Oracle One-to-One Fulfillment component of Oracle E-Business Suite', cveId: 'CVE-2017-3555', riskRating:'Medium', affectedInstance: 1}
       ];

       return vulnerabilities;

  }

}
