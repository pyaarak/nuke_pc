import React, { useState } from "react";
import "../Stylesheets/Faq.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function Faq(props) {
  const [showMorem, setShowmore] = useState(0);
  const [LoadMore, setLoadMore] = useState(false);
  const handClickView = (e) => {
    if (showMorem != e) {
      setShowmore(e);
    } else {
      setShowmore(0);
    }
  };
  return (
    <div className="Faq_Wrapper">
      <div className="Faq_inner_Wrapper">
        <div className="Header">
          <p className="Main_Header">
            F<span style={{ color: "#e4A025" }}>A</span>Q
          </p>
          <p className="Sub-content">
            Everything comes up with built-in and ready-to-go, you can take home
            a high-tech PC. "Pick & Pack" components with warranty, high-quality
            original components, No limit in terms of configuration like branded
            PCs and it is feasible to upgrade down the line. Above all there are
            continuous technical support services from the Nuke-PC engineering
            team. In addition, get our support for your software support.
          </p>
        </div>
        <div className="Main_Wrapper">
          <div className="Main_Inner_Wrapper">
            <div className="list">
              <div className={`inner_list ${showMorem == 1 && "active"}`}>
                <p className="main_content">
                  My computer does not turn on, what do I do now?
                  {showMorem == 1 && (
                    <p className="inner_main">
                      <p>1. Try different power sources / different cables</p>
                      <p>2. Check if Your Power Button Is the Problem</p>
                      <p>3. Check Your Monitor</p>
                      <p>4. Unplug Unnecessary USB Devices</p>
                      <p>5. Reduce the heat and try</p>
                      <p>6. Reseat the Hardware Inside, especially RAM</p>
                      <p>7. Check your CMOS Battery</p>
                      <p>8. Boot Into Safe Mode</p>
                      Please contact Nuke - PC servicing team for the further
                      support if problem not fixed
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(1);
                  }}
                >
                  {showMorem != 1 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 2 && "active"}`}>
                <p className="main_content">
                  How Much RAM do you recommend?
                  {showMorem == 2 && (
                    <p className="inner_main">
                      Understanding the year 2023 scenarios, we recommend 4GB of
                      RAM which is sufficient for basic tasks such as web
                      browsing, email and document editing. For more demanding
                      tasks such as video editing, gaming, and running multiple
                      programs at once, 8GB or more is recommended. 32GB is a
                      nice spot for professionals and high-end gamers. It's
                      enough to play any game, but pricing is still affordable.
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(2);
                  }}
                >
                  {showMorem != 2 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 3 && "active"}`}>
                <p className="main_content">
                  How do I manually update my PC?
                  {showMorem == 3 && (
                    <p className="inner_main">
                      <p>
                        Maintaining your computer with the latest updates is one
                        of the most important things you can do to keep your
                        information secure and to avoid crashes. You have to
                        ensure your internet connectivity for the auto updates.
                      </p>
                      <p>
                        OS : Each new version of major operating systems
                        includes more maintenance tasks that run automatically
                      </p>
                      <p>
                        Softwares : Selecting Control Panel, then selecting
                        System and Security, then Windows Update. Click Check
                        for updates to manually check for additional updates.
                      </p>
                      <p>
                        Anti Virus : You should have anti-virus software
                        running, and updating, to keep your computer safe.
                      </p>
                      <p>
                        Apps : Be sure to turn on automatic updates when
                        installing any new app.
                      </p>
                      <p>
                        Drivers : Select Control Panel, then Hardware and Sound,
                        and click on Devices and Printers. The window will list
                        all the hardware items you have installed. Restart your
                        PC for any troubleshooting performance issue You need to
                        restart your PC Troubleshooting performance issues
                        Enough RAM is advised, check the same
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(3);
                  }}
                >
                  {showMorem != 3 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 4 && "active"}`}>
                <p className="main_content">
                  Why does my computer freeze or crash?
                  {showMorem == 4 && (
                    <p className="inner_main">
                      Computer freezes and crashes irrespective of the following
                      reasons i.e. Software issues, it could be malware
                      infection, overheated computer, multi-tasking, bad drivers
                      and sometimes mouse issues too. Need to be keen on
                      inappropriate power supply also one of the major reasons.
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(4);
                  }}
                >
                  {showMorem != 4 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              {LoadMore &&
                <>
                  <div className={`inner_list ${showMorem == 5 && "active"}`}>
                <p className="main_content">
                  What does the blue screen of death:: BSOD indicate?
                  {showMorem == 5 && (
                    <p className="inner_main">
                      A BSOD is a full system failure at the Windows kernel
                      level due to an issue with Windows drivers and/or
                      hardware. It is not an App crash. If the browser crashes,
                      Windows continues running. It's very rare that an App can
                      cause a blue screen because it runs at a higher level in
                      the operating system. Perform a hard reset, run a hardware
                      diagnostic test, disconnect external devices, and boot
                      into safe mode with networking. You can run the blue
                      screen troubleshooter using support assistance. Repair the
                      missing or corrupted OS-related files. Also you need to
                      update the BIOS and drivers and finally restore the
                      computer using the Windows system restore. Call our
                      expertise technical team to assist you in fixing the issue
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(5);
                  }}
                >
                  {showMorem != 5 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 6 && "active"}`}>
                <p className="main_content">
                  How do I fix network connectivity problems?
                  {showMorem == 6 && (
                    <p className="inner_main">
                      <p>
                        Check the hardware before trouble shooting the process
                        whether all your hardware got connected properly, turned
                        on, and working in good condition. Other reasons might
                        be IP Configuration, DNS Checking, ISP support services
                        and you need to check virus & malware protection as
                        well. Try to review your Database logs if you are
                        familiar with.
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(6);
                  }}
                >
                  {showMorem != 6 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 7 && "active"}`}>
                <p className="main_content">
                  What do I do if my keyboard or mouse is unresponsive?
                  {showMorem == 7 && (
                    <p className="inner_main">
                      <p>
                        We are more friendly with wire-free and with wire
                        keyboards and mouse. If it were wireless gadgets, a dead
                        battery or faulty Bluetooth connection is the most
                        common reason for a mouse and keyboard to suddenly stop
                        working. Check it out and replace it in good condition.
                        Otherwise, reboot your PC by turning your computer off
                        and on again. Reinstall your keyboard driver. Adjust
                        your keyboard settings and change your keyboard
                        settings. Your mouse installation might be corrupt or
                        outdated drivers, malware, viruses, or connectivity
                        issues like damaged or loose cords. Try with a working
                        condition mouse in another computer.
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(7);
                  }}
                >
                  {showMorem != 7 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 8 && "active"}`}>
                <p className="main_content">
                  Why is my computer overheating/having a cooling issue?
                  {showMorem == 8 && (
                    <p className="inner_main">
                      <p>
                        Computer overheating is usually caused by multiple
                        factors. Common causes of cooling (fan) issues leading
                        to overheating in a computer include Abnormal programs
                        consuming CPU/memory resources. Accumulation of dust
                        inside the computer or at the exhaust vents. Inadequate
                        environmental conditions. Check that the fans are
                        working. Improve airflow for desktop PCs. Avoid using
                        programs that use a lot of CPU power. Close unnecessary
                        browser tabs and programs. Clean and dust your computer.
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(8);
                  }}
                >
                  {showMorem != 8 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 9 && "active"}`}>
                <p className="main_content">
                  What happens when the Power Supply Fails?
                  {showMorem == 9 && (
                    <p className="inner_main">
                      <p>
                        A faulty or failing PSU can cause various problems, such
                        as random shutdowns, blue screens, boot failures, or
                        even damage to other components. You would face
                        spontaneous rebooting, power-on fails, intermittent
                        lock-ups during applications, hard drive and fan failure
                        to spin up simultaneously, overheating of power supply
                        due to fan failure, and small brownouts that cause the
                        system to fail and restart.
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(9);
                  }}
                >
                  {showMorem != 9 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 10 && "active"}`}>
                <p className="main_content">
                  What causes WiFi and Bluetooth devices not to get connected?
                  {showMorem == 10 && (
                    <p className="inner_main">
                      <p>
                        First, check your Wi-Fi settings whether your desktop is
                        enabled with WiFi settings. Check the Wireless Mode
                        setting for your network adapter and make sure it
                        matches the capabilities of the network you're trying to
                        connect to. If it doesn't match, you won't be able to
                        connect, and the network might not appear in the list of
                        available networks.
                      </p>
                      <p>
                        Turn off and on Wi-Fi/Airport. - Reinstall or update the
                        driver of the wireless adapter. If you see the message
                        No connections are available, it is usually because the
                        wireless function is disabled or blocked somehow. Click
                        Troubleshoot and Windows might be able to fix the
                        problem by itself.
                      </p>
                      <p>
                        {`To troubleshoot your Bluetooth - Make sure aeroplane
                        mode is off: Select Start, then select Settings >
                        Network & Internet > Airplane mode. Make sure Airplane
                        mode is turned off. Turn Bluetooth on and off: Select
                        Start, then select Settings > Devices > Bluetooth &
                        other devices. Turn off Bluetooth, wait a few seconds,
                        then turn it back on.`}
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(10);
                  }}
                >
                  {showMorem != 10 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 11 && "active"}`}>
                <p className="main_content">
                  Why am I having audio problems?
                  {showMorem == 11 && (
                    <p className="inner_main">
                      <p>
                        Most audio problems are a result of improper, defective,
                        or misconnected cables; incorrect drivers; or resource
                        conflicts. Audio problems that occur when you have made
                        no changes to the system are usually caused by cable
                        problems or operator errors (such as accidentally
                        turning the volume control down).
                      </p>
                      <p>
                        Run the audio troubleshooter: Go to Search in the
                        taskbar, type audio troubleshooter, and select Find and
                        fix problems with playing sound from the results to
                        launch the troubleshooter. Select Next, and then select
                        the device you want to troubleshoot, and then continue
                        through the troubleshooter.
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(11);
                  }}
                >
                  {showMorem != 11 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 12 && "active"}`}>
                <p className="main_content">
                  How can I handle the USB port or other connectivity issues?
                  {showMorem == 12 && (
                    <p className="inner_main">
                      <p>
                        USB-related issues can be caused due to incompatible
                        devices, outdated, incorrect, or corrupt drivers,
                        damaged USB ports or cables, faulty USB ports, and so
                        on. First, disconnect the device and then reconnect it.
                        Check that the plug is inserted correctly and that the
                        cable is intact. If that doesn't work, connect the USB
                        device to another USB port on your computer. If it works
                        there, the previously used USB port may be defective.
                      </p>
                      <p>1. Make sure you have the right port,</p>
                      <p>2. Clean the debris and try it out,</p>
                      <p>3. Try with another USB connectivity</p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(12);
                  }}
                >
                  {showMorem != 12 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
              <div className={`inner_list ${showMorem == 13 && "active"}`}>
                <p className="main_content">
                  Why is my system clock or the system time shown wrong?
                  {showMorem == 13 && (
                    <p className="inner_main">
                      <p>
                        Sync computer manually: Windows is capable of synching
                        its time with other time servers on the internet. When
                        this connection with the network is interrupted, the
                        Windows clock may display an incorrect time. You can
                        solve it by manually syncing your computer.
                      </p>
                      <p>
                        {`Right-click on the Windows start button. Go to Settings
                        > Time & Language > Date & Time. Make sure that the
                        following options are all enabled: Set time
                        automatically. Set time zone automatically Also, check
                        the Control panel > Clock and Region > Set the time and
                        date. Manually you can change the date & time.`}
                      </p>
                    </p>
                  )}
                </p>
                <p
                  className="symbol"
                  onClick={(e) => {
                    handClickView(13);
                  }}
                >
                  {showMorem != 13 ? (
                    <AddIcon></AddIcon>
                  ) : (
                    <CloseIcon></CloseIcon>
                  )}
                </p>
              </div>
                </>
              }
              <p className="text_button"><button className="LoadMore_button" onClick={e=>{setLoadMore(!LoadMore)}}>{LoadMore ? "View Less" : "View More"}</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
