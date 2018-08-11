# A+ Study Guide

This is compiled from Professor Messer's Video Playlist.
This file will refer to the content of the A+ Certification: 220-901 and 220-902.

## Overview
* Exams
    * Multiple Choice Section
        * Single and multiple answer questions
    * Performance-based Section
        * Complete tasks (i.e. command line, matching, ordering, etc)
    * ANSI/ISO/IEC 17024
        * A standard that requires certification must be renewed in three years.
        * You can also partake in continuing education.
* 220-901
    * Topics
        * Hardware
        * Networking
        * Mobile Devices
        * Hardware & Network Troubleshooting
    * Format
        * Maximum of 90 Questions
        * Passing Score: 675/900
* 220-902
    * Topics
        * Windows/Mac/Linux Operating Systems
        * Security
        * Software Troubleshooting
        * Operational Procedures
    * Format
        * Maximum of 90 Questions
        * Passing Score: 700/900

## BIOS and UEFI
* BIOS (Basic Input/Output System)
    * Synonymous with Firmware, System BIOS, ROM BIOS, ROM, or Flash Memory.
    * This boots even without storage devices or operating systems.
    * Lives on the motherboard as a chip.
    * You launch the BIOS during system startup by pressing (a) specific key(s).
        * Del, F1, F2, Ctrl-S, Ctrl-Alt-S
    * Information
        * View and configure memory settings of RAM, Hard Drive, SSD
        * Enable/disable Optical Drive
        * Configure CPU  
        * Security
            * User password would require a password before booting the OS.
            * Supervisor password would require a password to change BIOS configuration.
        * Boot Settings
        * Hardware Diagnostics
    * POST (Power On Self Test)
        * It initiates your system and checks to see if you have all the hardware components necessary to start the operating system.
        * Checks for your CPU, Memory, and hardware.
        * On success, it searches for a boot loader to start the OS.
    * Versions
        * Legacy BIOS
            * 25 Years of History
            * Allowed OSes to talk to hardware through the BIOS
            * Limited hardware support
                * No drivers for modern network, video, and storage devices
        * UEFI (Unified Extensible Firmware Interface)
            * Based on Intel's EFI (Extensible Firmware Interface)
            * A standard implemented by manufacturers tailored to their hardware
            * Replaces the Legacy BIOS
            * New Features
                * Can boot from larger storage systems (GPT - GUID Partition Table - Disks)
                * Can support legacy FAT format and booting from removable media
                * Includes a pre-boot environment that isn't an operating system,
                    * Has its own shell, drivers, and applications
                    * Can browser the internet, backup storage, and run remote diagnostics
    * Configuration Storage
        * Always stored in nonvolatile memory
        * Traditionally stored in CMOS (Complementary Metal-Oxide Semiconductor) memory that would be backed up with a battery
            * A bad battery would require a BIOS configuration on every boot
        * Using flash memory in modern systems, which doesn't need a constant power source to preserve data
        * Batteries nowadays are used to maintain date/time
    * Security
        * Full Disk Encryption - encrypts everything
            * *example:* Windows BitLocker disk encryption
        * BIOS can integrate with a TPM (Trusted Platform Module)
            * is built-in to some systems, and can be added to many motherboards
            * adds advanced crytographic functions
        * LoJack for Laptops (originally CompuTrace)
            * Built into the BIOS and installed into the OS
            * Automatically reinstalls itself if removed or if new storage drive installed
            * Sends location information
            * Theft Mode that allows remotely locking, deleting files, and forces a start-up password
        * Secure Boot
            * Part of the UEFI specification
            * Checks the signature of known software and won't run without it
    * Firmware Upgrades
        * Involves upgrading the non-volatile memory/software, or physically older-style ROMs, or run programs with newer flash memory.
        * Could involve the computer BIOS, video adapter firmware, game console, etc
        * Is done to improve performance and/or fix bugs
        * Updating Process
            1. Identify current BIOS version
                * can appear when system starts
                * can look in `msinfo32`
                * can determine current vs update
                * can download a backup of current
            2. Read the documentation
            3. Use a reliable power source (i.e. a UPS - Uninterruptible Power Supply)
            4. Run the upgrade
        * Modern UEFI BIOS have advantanges such as:
            * Two separate BIOS versions
            * Upgrading from a flash drive
* Motherboards
    * Come in different sizes.
    * Have a basic layout with minor variations.
    * Has standard connectors, such as for power.
    * Airflow is increasingly important because all components get heated.
    * Types
        * Sizes: Standard-ATX > Micro-ATX > Mini-ITX > Nano-ITX > Pico-ITX
        * ATX (Advanced Technology Extended)
            * Subtypes
                * Standard-ATX
                * Micro-ATX
            * Standardized by Intel in 1995
            * Power Connectors
                * 20-pin (older)
                * 24-pin (modern) with potentially additional 4/8-pin connectors
            * Port Types
                * I/O (Input/Output) Connector
                * Expansion slots
        * ITX
            * Subtypes
                * Mini-ITX
                * Nano-ITX
                * Pico-ITX
            * Developed by VIA Technologies in 2001
            * Lower-power than ATX and substantially smaller.
            * Used for single-purpose computing.
    * Bus Architecture
        * Bus - an independent pathway that goes between different components on a motherboard
        * Expansion Bus
            * Referred to as "width" or "bandwidth" which refers to how much data we are able to move through the expansion slot
            * All buses have their own clock speed, measured as cycles per second (a Hertz)
            * Clock speed does not necessarily equal transfer rate
                * *example:* DDR3 SDRAM can transfer 64x the memory clock speed
            * Hertz
                * 1 MHz = Megahertz = 1 Million cycles per second
                * 1 GHz = Gigahertz = 1000 MHz
    * PCI (Peripheral Component Interconnect)
        * PCI adapter/expansion slots are used to expand the capabilities of the motherboard
        * Throughput varies by bus version
        * Cards have notches for different power connections
        * PCI
            * Created in 1994
            * 32-bit and 64-bit bus width
            * Allows parallel transfer of bits at the same time
        * PCI-X (PCI eXtended)
            * Designed for servers, to handle higher-speed network and storage
            * Higher bandwidth/throughput
        * PCIe (PCI Express)
            * Replaced PCI, PCI-X, and AGP (Accelerated Graphics Port)
            * Communicates serially (unidirectional serial "lanes")
            * Lanes are x1, x2, x4, x8, x16, x32 (pronounced "by #")
            * Has improved versions with better throughput
        * MiniPCI and MiniPCI Express
            * For laptops and mobile use
    * RAM (Random Access Memory)
        * Is incredibly important for speed.
        * DIMM (Dual Inline Memory Module)
            * Electrical contacts are different on each side
            * Memory is inline
            * 64-bit data width
            * Types
                * DDR SDRAM - 184 Pins
                * DDR2 - 240 Pins
                * DDR3 SDRAM - 240 Pins
                * SO-DIMM (Small Outline Dual In-Line Memory Module)
                    * For laptops.
                    * Subtypes
                        * DDR - 200 Pins
                        * DDR2 SDRAM - 200 Pins
                        * DDR3 SDRAM - 204 Pins
                * Micro-DIMM
                    * For smaller mobile devices.
                    * Subtypes
                        * DDR - 172 Pins
                        * DDR2 - 214 Pins
                        * DDR3 - 214 Pins
            * Notches in the card are used to differentiate memory card types.
    * CPU (Central Processing Unit)
        * Motherboards are matched with CPUs based on socket requirements.
        * Is central and one of the largest things on the motherboard.
        * Uses a ZIF (Zero Insertion Force) socket - pull a lever to lock the CPU in place.
        * Has a PGA (Pin Grid Array) that should never be bended.
        * LGA (Land Grid Array) is the reverse of the PGA, where the motherboard has the pins instead of the CPU.
    * Motherboard Chipsets
        * Traditional Chipset
            * Northbridge AKA Memory Controller Hub
                * Connects the CPU to memory and high-speed graphics card
                * High bandwidth communication
                * Is connected to the CPU with the FSB (Front Side Bus)
            * Southbridge AKA I/O Controller Hub
                * Manages connections such as PCI interface slots, other peripherals (i.e. USB, Ethernet, IDE, etc), onboard graphic controllers, BIOS
            * Super I/O
                * Handles I/O for Serial Port, Parallel Port, Floppy Drive, Keyboard, Mouse
                * For tertiary I/O
        * Modern
            * More functions move into the CPU for *speed*
            * Has processor cores
            * Has a memory controller
            * has a GPU (Graphics Processing Unit)
    * Motherboard Jumpers and Connectors
        * Wires in a case will correlate to connectors on a motherboard.
        * Jumpers are not for connections, but to enable/disable certain features of the motherboard when connected/disconnected.
* RAM