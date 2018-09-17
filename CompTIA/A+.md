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
* Memory Types
    * RAM (Random Access Memory)
        * The most common type of memory - but is not the only kind (i.e. hard drive, SSD storage which are meant to store data permanently)
        * Data and programs can only be used when moved to RAM
        * Random Access means that any storage location can be accessed directly - unlike magnetic tape.
    * ROM (Read Only Memory)
        * Can't be changed or erased - good for storing the BIOS
        * Subtypes
            * PROM (Programmable ROM) - You can write to it once.
            * EPROM (Erasable PROM) - Can write and erase physically.
            * EEPROM (Electrically Erasable PROM) - Can electronically write and erase using Flash Memory/SSD.
    * SRAM (Static RAM)
        * Very fast, expensive, and physically large memory.
        * Often used in processor caches.
    * DRAM (Dynamic Random Access Memory)
        * The constantly refreshing memory that is generally referred to when referring to RAM.
    * SDR SDRAM (Single Data Rate Synchronous DRAM)
        * 168-pins
        * Synchronized to a common system clock
        * Queues up a process while waiting for another
        * With each clock cycle, you are able to transfer a single piece of data
    * DDR SDRAM (Double Data Rate SDRAM)
        * Twice the data rate as SDR SDRAM
        * Same clock speed, but sends a piece of data both on the high end and low end of the clock, effectively doubling the data
        * 184-pins
        * Units of Measurement
            * DDR-200 = 200 Million transfers per second
            * Multiply by 8 for throughput in MB/s
            * DDR-200 = PC1600 (Module Name)
    * DDR2 SDRAM (Double Data Rate 2 SDRAM)
        * Twice as fast as DDR
        * 240-pins
        * Not backwards-compatible
        * Units of Measurement
            * *example:* DDR2-400 = PC2-3200
    * DDR3 SDRAM (Double Data Rate 3 SDRAM)
        * Twice as fast as DDR2
        * 240pins
        * Not backwards-compatible
        * Larger chip capacities
        * Units of Measurement
            * *example:* DDR3-800 = PC3-6400
* Memory Concepts
    * Self-checking memory
        * Important for critical computer systems
        * Parity Memory - adds an additional parity bit - won't always detect an error - can't correct an error - can only inform of an error
            * The parity bit adds the sum of the 8 values in a bit, and adds a 0 or 1 to bring it to parity (even)
            * If the parity bit does not combine with the 8 values in the bit to bring it to parity, something has gone wrong
        * ECC (Error Correcting Code) - detects errors and corrects on the fly - not all systems use it
    * Registered memory AKA "buffered" memory
        * Includes an additional register between the RAM module and the memory controller
        * Used for more stable operating environments, primarily on servers
    * Multi-channel memory
        * When memory is installed in pairs or trios, it maximizes throughput
    * Single-sided vs double-sided
        * Not literally - but the conceptual 'ranks' / 'sides' of groups of memory that can be independently accessed
        * The memory controller would move between the ranks
* Expansion Cards
    * Audio Cards
        * Output/input
    * Video Cards
        * Fans, heatsinks, processors
    * Network Interface Cards
        * Some have multi-port Ethernet
    * USB Cards
    * Firewire Cards
    * Thunderbolt Cards
    * Storage Cards
        * For RAID
    * Modem Cards
        * Connect a phone line
        * For laptops and mobile devices, MiniPCI and MiniPCI Express serve as a hotspot on a card
    * Television Tuners/Video Capture Cards
        * Can receive information and save as digital signals
    * Riser Cards
        * Turns card slots 90 degrees 
        * Good for servers with height limitations
    * Installation
        * Research hardware and software requirements
        * Research driver or hardware first
        * Research performance of card
        * Install the driver from the manufacturer's site or manually with Windows Device Manager
* Storage Devices
    * Optical Storage
        * Have small microscopic binary bumps that are read with a laser beam
        * Can be written to with 'burners,' that darken photosensitive dye
        * Types
            * CD-ROM (Compact Disc ROM)
                * 700 MB capacity
            * DVD-ROM (Digital Versatile Disc)
                * 4.7 GB for Single-Layer
                * 8.5 GB for Dual-Layer
            * Blu-Ray Disc
                * 2.5 GB for Single-Layer
                * 5 GB for Dual-Layer
            * CD-RW (Compact Disc-ReWritable)
            * DVD-R/RW (DVD Read and Rewritable)
            * DVD-R DL (DVD Read and Rewritable Dual-Layer)
            * BD-R (Blu-Ray Disc Recordable)
            * BD-RE (Blu-Ray Disc Recordable Erasable)
    * Hard Disk Drives
        * Spinning platters inside a device, with specs represented by `rpm` (Rotational Speed) that determine the latency.
        * Platters spin around a spindle, with an actuator that moves an arm across the platters.
        * The arm has a head which can read/write to the platters.
        * Is a mechanical drive.
    * SSD (Solid-State Drives)
        * Flash memory in a component for long-term storage.
        * Most expensive.
    * SSHD (Solid State Hybrid Drive)
        * Has a spinning drive and SSD.
        * The SSD is used to cache information to increase the speed.
    * Hot Swappable Drive
        * Can add/remove as the system is running - the connection is "hot"
        * Types
            * Flash Memory
                * EEPROM (Electrically Erasable Programmable Read-Only Memory)
                * Non-volatile memory
                * Limited number of writes
                * Easy to lose or damage
                * Types
                    * USB Flash Drive
                    * CF (CompactFlash)
                    * SD (Secure Digital)
                    * miniSD
                    * microSD
                    * xD-Picture Card
                    * eMMC
            * FireWire
            * SATA, eSATA (external SATA)
            * Tape Drives
                * Archive data for low cost over a long period of time.
                * Uses magnetic tape to sequentially store data.
                * Easy to ship and store.
                * LTO (Linear Tape-Open) AKA Ultrium Form-Factor is the standard format for Tape Drives.
* RAID (Redundant Array of Independent Disks)
    * Can be software or hardware-based
    * Hardware-based RAID performs better and is invisible to the OS
    * RAID Levels
        * RAID 0 - Striping
            * Layer file blocks between two or more physical drives
            * High performance because the load is split between drives
            * No redundancy
        * RAID 1 - Mirroring
            * Duplicated file blocks between two or more physical drives
            * Doubles required disk space and has high disk utilization
            * High redundancy
        * RAID 5 - Striping with Parity
            * Adds a parity block for each striped file block
            * Requires at least three disks
            * Efficiently uses disk space - no file duplication but space is still used for parity
            * High redundancy - can restore data with parity calculations
        * Nested RAID - RAID 10 - RAID 1+0 - Striping with Mirrored Drives
            * Combine the speed of striping and the redundancy of mirroring
            * Needs at least 4 Drives
* CPU Socket Types
    * Intel
        * The numbers refer to the number of pins on the CPU itself.
        * LGA stands for Land Grid Array.
        * All support different types of CPUs and RAM.
        * Types
            * Intel LGA 775
                * AKA Socket T - named for the cancelled Tejas Core
                * Circa 2004
                Used by Pentium 4, Intel Core 2 Duo, Xeon, and Celeron processors
            * Intel LGA 1366
                * AKA Socket B
                * Replaced LGA 775
                * Circa 2008
                * Used by Intel Core i7 Processor
            * Intel LGA 1156
                * AKA Socket H AKA Socket H1
                * Also replaced LGA 775
                * Integrates Northbridge on the chip
                * Circa 2009
            * Intel LGA 1155
                * AKA Socket H2
                * Replacement for LGA 1156
                * Circa 2011
                * Supports Intel Sandy Bridge and Ivy Bridge microprocessors
            * Intel LGA 1150
                * AKA Socket H3
                * Replacement for LGA 1155
                * Circa 2013
                * Used by Haswell and Broadwell microarchitecture
            * Intel LGA 2011
                * AKA Socket R
                * Replaced LGA 1366 and LGA 1567
                * Circa 2011
                * Used for high-end desktops and servers - supports Sandy Bridge-E/EP and Ivy Bridge-E/EP (Enthusiast and Xeon class)
    * AMD
        * PGA stands for Pin Grid Array.
        * ZIF Socket Type on the motherboard.
        * All support different type of CPUs and RAM.
        * Types
            * AMD Socket AM3
                * 941-pins
                * Replaced the AM2/AM2+
                * Circa 2009
            * AMD Socket AMD3+
                * 942-pins
                * Circa 2011
            * AMD Socket FM1
                * 905-pins
                * Circa 2011
                * Supports "AMD 10h" CPU architecture
            * AMD Socket FM2
                * 904-pins
                * Circa 2012
                * "Piledriver" CPU Architecture
            * AMD Socket FM2+ (FM2B)
                * 906-pins
                * Micro PGA-ZIF package
                * Circa 2014
                * "Steamroller" CPU Architecture
* Understanding CPU Characteristics
    * There is no broadly accepted measure of performance - use a benchmark appropriate to the situation
    * CPUs can have single or multiple cores with their own L1 and L2 caches, a shared L3 cache, a memory controller (the integrated Northbridge), and processor graphics
    * A CPU Die is a small block of semi-conducting material on which a given functional circuit is fabricated
    * Processor Speed
        * Listed in GHz (Gigahertz) or MHz (Megahertz)
        * Qualification of speed
        * The actual speed is affected by many other variables (such as: clock speed, CPU architecture, bus speed, bus width, L1 cache size, L2 cache size, operating system capabilities, etc)
    * Processor Cores
        * Dual-core / Quad-core / Octa-core / Multi-core / etc
        * More cores means more processing simultaneously
    * Caches
        * Are of incredibly fast memory
        * Used to hold data, instruction, and/or results
        * Types
            * Level 1 Cache
                * Close to the CPU core - is the first location checked
            * Level 2 Cache
                * Secondary data
            * Level 3 Cache
                * Still on the chip, but is the furthest away
    * Hyper-Threading Technology (HTT)
        * Has a single CPU act as if it is 2 CPUs to improve performance
        * Generally gives a 15-30% performance improvement
        * The OS must be written for HTT
    * Virtualization Support
        * Run other operating systems within a single hardware platform
        * Virtualization via software had performance and hardware management limitations
        * Virtualization added to the processor
            * Intel Virtualization Technology (VT)
            * AMD Virutalization (AMD-V)
    * 32 Bit VS 64 Bit
        * Refers to the total amount of data a CPU can process at the same time
        * Is the data "width"
        * Refers to the data path, integer size, memory addresses, registers, address bus, and data bus
        * Bus size may not necessarily match the CPU Architecture
        * If using a 64 Bit hardware setup, you must use 64-Bit software (OSes, drivers, and applications)
    * Integrated GPU (Graphics Processing Unit)
        * Is integrated into the CPU
        * Graphics rendering requires a lot of work - so dedicated hardware improves performance
        * Still not as powerful as separate adapters
    * NX Bit (No-eXecute Bit) AKA XD Bit (eXecute Disable, by Intel) AKA Enhanced Virus Protection (by AMD)
        * Designates sections of memory as executing code or data
        * Will designate other sections as areas where code can't run - protected memory locations
        * Prevents malware and viruses from executing
        * The OS must support this feature (Windows has DEP - Data Execution Prevention - which is enabled by default)
* CPU Cooling
    * Heat Sink
        * Designed to dissipate heat through thermal conduction - usually made of aluminimum or copper
        * Sit on top of a hot component and pull the heat out into fins/grid
        * The fins/grid increase the surface area, and heat is then transferred to the cooler air
        * Thermal paste creates a good contact between the chip and the heat sink
        * A fan is often included on top of the heat sink to help move the heat off the heat sink
    * Thermal Paste
        * A small dab in the center is sufficient, and placing the heatsink will distribute it accordingly
    * On-board Fan Adapter Cards
        * Can be used to help cool - but takes up a lot of room
        * Often seen on high-end graphics cards
    * Case Fans
        * Moves cool air through the computer
        * Motherboard layout is important - devices, wiring, and power cords should not be in the way for good airflow
    * Fan Sizes
        * There are standard sizes, variable speeds, and different noise levels
    * Liquid Cooling
        * Circulates coolant through a computer
        * Often used in high-end systems (gaming, graphics, overclocking)
        * Done in a closed system that flows to a block attached to the CPU, then flows outward when hot, and is cooled down at a different location
    * Passive Cooling
        * Some don't use fans - like devices that only have specialized functions (video servers, TV set top boxes, satellite receivers, media servers, etc)
        * They go through very carefully measured thermal tests to ensure they don't overheat
* Computer Interface Speeds and Distances
    * USB (Universal Serial Bus)
        * USB 1.1
            * Low speed: 1.5 megabits per second, 3 meter maximum
            * Full speed: 12 megabits per second, 5 meters maximum
        * USB 2.0
            * 480 megabits per second, 5 meters maximum
        * USB 3.0 AKA SuperSpeed USB
            * 5 gigabits per second, 3 meters maximum
    * Connectors
        * USB 1.1/2.0 Conneectors
            * Standard-A Plug
                * Connects to a laptop/desktop.
            * Standard-B Plug
            * Mini-B Plug
                * Used for mobile devices.
            * Micro-B Plug
                * Used for mobile devices.
        * USB 3.0 Connectors
            * Standard-A Plug
                * Looks almost the same as the previous edition.
            * Standard-B Plug
            * Micro-B Plug
        * FireWire / IEEE 1394 / i.LINK / Lynx
            * An Apple trademark.
            * Can daisy chain up to 63 devices.
            * Commonly used on external storage devices.
            * 4.5 meters maximum per link.
            * Subtypes
                * FireWire 400 (Alpha Mode) / IEEE 1394a
                    * 100/200/400 Mbits/s half-duplex
                    * 4-pin (unpowered) and 6-pin (powered)
                * FireWire 800 (Beta Mode) / IEEE 1394b
                    * 800 Mbits/s full-duplex
                    * Optical connections support 100 meter distance maximum
                    * 9-pin (powered)
        * SATA (Serial AT Attachment)
            * The right-side is the 7-pin data connection, shaped like an "L" turned counterclockwise 90 degrees
            * The left-side is the 15-pin power connection, shaped like an inverted "L" turned clockwise 90 degrees
            * Types
                * SATA Revision 1.0
                    * 1.5 Gbit/s, 1 meter maximum
                * SATA Revision 2.0
                    * 3 Gbits/s, 1 meter maximum
                * SATA Revision 3.0
                    * 6 Gbits/s, 1 meter maximum
                * eSATA (external SATA)
                    * Matches the SATA version, 2 meter maximum
        * VGA (Video Graphics Array)
            * DB-15 Connector / DE-15
                * Blue color
                * Uses analog signals
                * Image degrades over 5-10 meters
        * HDMI (High Definition Multimedia Interface)
            * Streams video and audio
            * Completely digital
            * ~ 20 meter maximum before losing signal
            * 19-pin (Type A) connector - proprietary
            * miniHDMI (Type C) connector - designed for smaller devices
        * DVI (Digital Visual Interface)
            * Single (3.7 Gbps - HDTV at 60fps) and dual link (7.4 Gbps - HDTV at 85fps) connections
            * DVI-A
                * Sends analog signals
            * DVI-D
                * Sends digital signals
            * DVI-I
                * Integrated digital and analog in the same connector
        * Audio Ports
            * Analog
                * TRS (Tip / Ring / Sleeve) Plug
                    * 1/4" or 6.35mm
                    * 1/8" or 3.5mm
                    * The colors tandard is not always followed
            * Digital
                * TOSLINK (Toshiba Link)
                    * Optical Fiber
                    * Circa 1993
                    * Used on a lot of consumer electronics
                    * ~10 meters maximum
        * RJ11 (Registered Jack)
            * Analog modem, DSL Line
            * Telephone connection
            * 6P2C - 6 Positions, 2 Conductors
            * Some RJ standards use the same physical interface but different wiring (i.e. 6P4C, 6P6C, etc)
        * RJ45 (Registered Jack)
            * Used for ethernet (patch, crossover cables, device connectors)
            * 8P8C - 8 Positions, 8 Conductors
        * Thunderbolt
            * High-speed serial connector
            * Data and power on the same cable
            * Based on MDP (Mini DisplayPort) Standard
            * 3 Meters maximum for copper
            * 60 meters maximum for optical
            * Can daisy-chain up to 6 devices
            * Throughput
                * V1
                    * 10Gbit/s per channel, 20Gbit/s total throughput
                * V2
                    * 20Gbit/s per channel, aggregated channels
                * V3
                    * 40Gbit/s
* Wireless Interface Speeds and Distances
    * Infrared
        * IrDA (Infrared Data Association)
        * 4 Mbit/s, line-of-sight required
        * 1 meter maximum
        * Laptop, phone, camera
    * NFC (Near Field Communication)
        * 106 / 212 / 424 kbit/s
        * 10cm / 3.9in maximum
        * Mobile devices, payment devices, ticketing, gaming
    * Bluetooth Radios
        * Classes
            * Class 1
                * Industrial-use
                * 100 mW
                * 100 meters
            * Class 2
                * Many mobile devices
                * 2.5 mW
                * 10 meters
            * Class 3
                * Short-range use
                * 1 mW
                * 1 meter
        * Versions
            * Version 1.2
                * Circa 1995
                * Fast connection and recovery
                * 1 Mbit/s
            * Version 2 + EDR (and 2.1 + EDR)
                * Enhanced Data Rate
                * 3 Mbit/s
            * Version 3 + HS (High Speed)
                * Bluetooth to establish negotiation and establishment
                * 802.11 used for actual data transfers
                * 24 Mbit/s
            * Version 4
                * Includes low power specification
                * 24 Mbit/s
    * 802.11 Networking
        * 802.11a 
            * 5 GHz Frequency
            * Maximum theoretical throughput of 54 Mbit/s at 120m with 1 stream
        * 802.11b 
            * 2.4 GHz Frequency
            * Maximum theoretical throughput of 11 Mbit/s at 140m with 1 stream
        * 802.11g
            * 2.4 GHz Frequency
            * Maximum theoretical throughput of 54 Mbit/s at 140m with 1 stream
        * 802.11n
            * 5 GHz and/or 2.4 GHz Frequency
            * Maximum theoretical throughput of 600 Mbit/s at 250m with 4 streams
        * 802.11ac
            * 5 GHz Frequency
            * Maximum theoretical throughput of 6,934 Mbit/s at 250m with 8 streams
* Connection Characteristics
    * We are either sending a digital or analog signal.
    * Analog Modulation
        * Sent over an analog channel, such as AM and FM Radio over Radio Frequencies
        * Further away from the frequency it begins to degrade
    * Digital Modulation
        * Sends a digital bitstream over an analog channel - series of 1s and 0s, such as Satellite Radio Frequencies
        * You either receive it or you don't
    * Distance Limitations
        * Signals degrade despite whatever technology is used - standards are in place to establish reasonable limitations
        * Need advanced testing gear to measure the signal
    * Data Transfer Speeds
        * Not a straightforward calculation
        * Different measurements for different locations
            * Bytes for disks
            * Bits for networks
        * Example: SATA Storage
            * Uses 8b/10b signaling - to send 8 bits, it really has to send 10 bits
            * Actual data transfer is 80% of the speed 
    * Quality
        * Measure of Signal Strength
        * Signal-to-Noise Ratio
        * Variables for Quality
            * Wires
            * Connectors
            * Fibers
            * Wireless
    * DRM (Digital Rights Management)
        * Control over digital media
        * May be controlled in software or hardware
    * Frequencies
        * Number of Cycles in a Second (Hertz - Megahertz - Gigahertz)
        * Faster speeds are often using faster frequencies
* Computer Power Connectors
    * SATA Power
        * Storage devices are often SATA connected devices.
        * 15-pins - includes +3.3V, +5V, and +12V wires (while +3.3V is rarely used)
    * Molex Connector
        * 4-pin peripheral power connector created by Molex Connector Company
        * AMP makes MATE-N-LOK which is functionally the same
        * +12V and +5V
        * Used for many devices - storage drives, optical drives, fans, etc
    * ATX12V Advanced Technology Extended motherboard connector
        * 4-pin ATX +12 V 
        * Additional 12V power for older motherboards, primarily used for CPU
        * May be labeled ATXV12, P4, or CPU
        * Will be keyed for the appropriate connector
    * EPS12V Cable (Entry Level Power Supply Specification)
        * A 4+4 Connector - has an ATX12V on each side
        * 8-pins
        * Seen mostly on servers
        * Not the same as an 8-Pin PCI Express power - keyed differently
    * PCIe 6-pin and 8pin Connectors
        * Additional power for PCI Express adapaters
        * 6-pin provides 75 watts, 8-pin provides 150 watts
        * +12V
        * Commonly seen on high-power components
        * Some are separate 6 and 2 pins that can be connected
    * 20-Pin and 24-Pin Motherboard Power Connector
        * +3.3 V, +/-5V, and +/-12V
        * 20-pin was the original ATX Standard
        * 24-pin is the new standard because of PCI Express
        * Some cables are 20-pin + 4-pin (backwards compatible)
        * Is keyed in a particular manner
* Power Specifications
    * Units of Measurement
        * Amps (A) - The rate of electron flow past a point in one second - a larger hose could have more amps pushed through
        * Volts (V) - The electrical "pressure" that is pushing the electrons - turning the water pressure on would increase the voltage
        * Watts (W) = volts * amps = Measurement of real power use
            * Example: 120V Connection * 0.5 Amps = 60 Watts of Power
    * Current
        * AC (Alternating Current)
            * Direction of the current constantly reverses/alternates
            * Distributes eleectricity efficiently over long distances
            * Frequency is important
                * US/Canada - 110-120 Volts of AC (VAC), at 60 Hz
                * Europe - 220-240 VAC, at 50 Hz
        * Power supplies take AC and converts it into DC
        * DC (Direct Current)
            * Current moves in one direction with a constant voltage
    * Voltage Rails for Power Supplies
        * Single Rail
            * A single 12V rail power supply provides the 12V on a single circuit to the motherboard
        * Multiple Rails
            * Multiple 12V rails has separate circuitry inside the power supply
            * Provides additional protection from overload by shutting down if a rail shuts down
    * Evaluating Power Supplies
        * Bigger isn't necessarily better
        * Calculate the watts required for all components
        * Note: video adapters are usually the largest power draw
        * Get a power supply twice as big for good measure - room for growth
    * Power Supply Connectors
        * May be fixed or modular
    * Power Supply Dimensions
        * Are standardized, but be careful with older ones or with small cases like microATX
        * Some power supplies have a manual switch to switch between 110/115V and 220/230V
        * Plugging in a 115V Power Supply into a 230V Power Source will start a fire
* Designing Custom Computer Systems
    * Graphics Workstations/CAD (Computer Aided Design)/CAM (Computer Aided Manufacturing)
        * Multicore processor for advanced calculations and 3D modeling
        * High-end video card for complex graphics
        * Maximum RAM due to significant memory use