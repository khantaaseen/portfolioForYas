import React, { useState } from "react";
import "../styles.css"
import { ListItem, Text, UnorderedList } from "@chakra-ui/react"



export default function Current() {

    const [cards] = useState([
        {
            title: 'CLAM Automation Tool ',
            text: <UnorderedList>
                <ListItem>Comprehensive analysis of JSONs, datacenters, clusters, vCenters, etc. to understand our virtual environment .</ListItem>
                <ListItem>Training with automation team to learn Infrastructure as a Code to understand CLAM automation tool to deploy/remediate virtual environments.</ListItem>
                <ListItem>Updates to JSON to automate new vCenters.</ListItem>
                <ListItem>Developed Storage function.</ListItem>
            </UnorderedList>
        },
        {
            title: 'Field Testing Automation ',
            text: <UnorderedList>
                <ListItem>Analyzed existing field-testing processes and working with engineering, operations and PlantOne to understand the different methods.</ListItem>
                <ListItem>Aligning beta and QA testing procedures with production practices to ensure accurate build process to prevent host issues.</ListItem>
                <ListItem>o	Developing automated testing script to assess the success or failure of new ESXI image to save time .</ListItem>
            </UnorderedList>
        },
        {
            title: 'EVC Mode Data Analysis ',
            text: <UnorderedList>
                <ListItem>Conducted in-depth analysis of minimum/maximum EVC mode compatibility with hardware by vCenter, hosts, clusters and CPU hardware across entire virtual infrastructure.</ListItem>
                <ListItem>Documented and presented detailed report to plants for EVC mode upgrades.</ListItem>
                <ListItem>Developed script to set-cluster to higher EVC mode without downtime for hosts/VMs.</ListItem>
            </UnorderedList>
        },
        {
            title: 'VMware Aria Operations (vROPS) Product Owner',
            text: <UnorderedList>
                <ListItem>Completed VMware Hands-On-Labs and workshops to gain in-depth understanding of vROPS capabilities.</ListItem>
                <ListItem>Orchestrated and managed quarterly environment upgrades through pipeline – Dev, QA, PreProd, Production, Distributed and Disaster Recovery environment.</ListItem>
                <ListItem>Addressed vROPS hot fixes by testing in lower pipeline environments before applying in production to address critical issues and vulnerabilities.</ListItem>
                <ListItem>Created dynamic dashboards, alerts, notification to proactively monitor all of our virtual environments for better visibility and faster remediation.</ListItem>
                <ListItem>Collaborated with internal/external teams to gather customer requirements for monitoring.</ListItem>
                <ListItem>Updated and maintained product documentation including configuration, release notes, architectures, training, and runbooks for both internal and external teams.</ListItem>

            </UnorderedList>
        },
        {
            title: 'ItConnect API ',
            text: <UnorderedList>
                <ListItem>Collaborated with ITConnect team to create APIs needed for global-vmware-operations support group.</ListItem>
                <ListItem>Developed automation scripts for incident creation and change request tickets for OPS team to integrate within audit scripts for faster issue resolution.</ListItem>
            </UnorderedList>
        },
        {
            title: 'Automatic Password Change for vCenter Appliances',
            text: <UnorderedList>
                <ListItem>Audited all vCenter administrator and root passwords for security compliance.</ListItem>
                <ListItem>Verified that vCenters were correctly organized in Vault folder for intended user(s)/group(s) access.</ListItem>
                <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListItem>
            </UnorderedList>
        }
    ])

    return (
        <div>
            <h1 className="about-title">Current Work</h1>
            <section className="curr-section">
                <div className="current-container">
                    <h1 className="curr-title">Key Accomplishments</h1>
                    <div className="cards">
                        {cards.map((card, i) => (
                            <div key={i} className="card">
                                <Text fontSize='lg' as='b'>{card.title}</Text>
                                <Text fontSize='md' >{card.text}</Text >
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}