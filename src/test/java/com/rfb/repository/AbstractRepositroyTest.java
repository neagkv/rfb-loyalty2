package com.rfb.repository;

import org.springframework.beans.factory.annotation.Autowired;

abstract class AbstractRepositroyTest {

    @Autowired
    RfbLocationRepository rfbLocationRepository;

    @Autowired
    RfbEventRepository rfbEventRepository;

    @Autowired
    RfbEventAttendanceRepository rfbEventAttendanceRepository;

    @Autowired
    RfbUserRepository rfbUserRepository;
}
