# What is CompTIA?

The Computing Technology Industry Asociation that provides system-agnostic computer certifications for IT professionals.

## Learning Goals

Some of the certifications that have been assigned to me are:
* (220-901, 220-902) A+ - Fundamentals
* (N10-007) Network+ - Networking
* (SY0-501) Security+ - Social Engineering
These are very broad, unspecific conceptual topics.

Tangentially, I have also been assigned some Microsoft-specific certification from the Microsoft Technology Associates (MTA).

These are:
* 98-349 - Windows OS Fundamentals
* 98-366 - Windows Networking Fundamentals
* 98-367 - Windows Security Fundamentals

Some of the primary concepts I need to master are:
* TCP/IP
* IPv4
* CIDR (Classless Inter-Domain Routing)
* 0.0.0.0
* DNS
    * External/Internal Packets
* Internet
* CISCO Troubleshooting Methodology - using the OSI Stack
    * Example:
        1. ping 127.0.0.1 to check for a loopback to confirm our nic (network interface card) is good
           OR
           ping the logical address on the hardware interface
        2. Send a packet of traffic by pinging another server to check network traffic on the server
        3. Ping the default gateway (firewall/router)
        4. Ping beyond the firewall
        5. Use `traceroute`
* Command Line Utilities
    * `ipconfig /all`
        * IPv2
        * Subnet Mask
        * Default Gateway
        * DHCP
        * DNS
    * `tracert`
        * Shows the exact path a packet takes
    * `nslookup`
        * Shows the DNS server resolving the ipconfig name

Some resource recommendations are:
* CompTIA Books written by Mike Meyers or Sybex