<template>
    <v-container fluid fill-height grid-list-md fill>
        <v-layout row wrap>
            <v-flex xs8>
                <v-layout column>
                    <v-flex>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Are you okay?</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowHelp = !ShowHelp">
                                    <v-icon>{{ ShowHelp ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowHelp">
                                    <v-layout row>
                                        <v-flex xs2>
                                            <v-container fill-height>
                                                <v-layout justify-center align-center>
                                                    <v-flex shrink>
                                                        <v-card flat class="text-xs-center">
                                                            <v-icon size="64" color="primary">announcement</v-icon>
                                                        </v-card>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="https://uoit.ca/forms/areyouokay/index.php"
                                                           target="_blank" outline color="accent">HELP
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Important Information</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowImportant = !ShowImportant">
                                    <v-icon>{{ ShowImportant ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowImportant">
                                    <v-layout row>
                                        <v-flex xs2>
                                            <v-container fill-height>
                                                <v-layout justify-center align-center>
                                                    <v-flex shrink>
                                                        <v-card flat class="text-xs-center">
                                                            <v-icon size="64" color="primary">info</v-icon>
                                                        </v-card>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-title primary-title>
                                                    <div>
                                                        <span class="headline">FALL/WINTER 2018-2019 INFORMATION</span>
                                                    </div>
                                                </v-card-title>
                                                <v-card-text>
                                                    <ul>
                                                        <li>
                                                            Fall 2018 final examinations
                                                            <ul>
                                                                <li>
                                                                    The final examination period is from December 7 to
                                                                    15. Students are advised to <strong>not</strong>
                                                                    make
                                                                    commitments during this period (e.g. vacation,
                                                                    travel
                                                                    plans, etc).
                                                                </li>
                                                                <li>
                                                                    The emergency exam date is Sunday, December 16.
                                                                </li>
                                                                <li>
                                                                    The deferred final examination dates are scheduled
                                                                    for January 3 and 4.
                                                                </li>
                                                                <li>
                                                                    Student Accessibility Services (SAS): If you are
                                                                    registered with SAS, you must <a target="_blank"
                                                                                                     href="https://disabilityservices.uoit.ca/uoitclockwork/user/test/default.aspx">register
                                                                    through the Test Centre portal</a> to use full
                                                                    accommodations; the deadline is Friday, November 16
                                                                    at 4 p.m. to secure a seat.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="http://portal.mycampus.ca/mycampusfiles/uoit/student/2018/fall_2018_exam_schedule_by_course.pdf"
                                                           target="_blank" outline color="accent">Schedule by course
                                                    </v-btn>
                                                    <v-btn href="http://portal.mycampus.ca/mycampusfiles/uoit/student/2018/fall_2018_exam_schedule_by_date.pdf"
                                                           target="_blank" outline color="accent">Schedule by date
                                                    </v-btn>
                                                    <v-btn href="http://portal.mycampus.ca/mycampusfiles/uoit/student/2018/fall_2018_exam_schedule_amendments.pdf"
                                                           target="_blank" outline color="accent">Schedule amendments
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                    <v-divider></v-divider>
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-container fill-height>
                                                <v-layout justify-center align-center>
                                                    <v-flex shrink>
                                                        <v-card flat class="text-xs-center">
                                                            <v-icon size="64" color="primary">laptop</v-icon>
                                                        </v-card>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-title primary-title>
                                                    <div>
                                                        <span class="headline">DEFAULT NETWORK PASSWORD</span>
                                                    </div>
                                                </v-card-title>
                                                <v-card-text>
                                                    <ul>
                                                        <li><a target="_blank" href="https://itsc.uoit.ca/services/uoitnet-Google-Apps-for-Education/first-time-network-login-process-for-newly-admitted-students.php">     Follow the instructions</a> to setup your network password. Your password controls your access to the university’s network.
                                                            <ul>
                                                                <li>Your default password is your birth date in the <strong>MMDDYY</strong> format. You <strong>must</strong> change it before you can access your Blackboard, UOITnet and Wi-Fi. &nbsp;</li>
                                                                <li>If you are not able to log in—or have any questions or concerns—contact the IT Service desk, <a href="mailto:servicedesk@dc-uoit.ca">servicedesk@dc-uoit.ca</a>, 905.721.3333.</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="https://itsc.uoit.ca/services/uoitnet-Google-Apps-for-Education/first-time-network-login-process-for-newly-admitted-students.php"
                                                           target="_blank" outline color="accent">First time login process
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                    <v-divider></v-divider>
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-container fill-height>
                                                <v-layout justify-center align-center>
                                                    <v-flex shrink>
                                                        <v-card flat class="text-xs-center">
                                                            <v-icon size="64" color="primary">contacts</v-icon>
                                                        </v-card>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-title primary-title>
                                                    <div>
                                                        <span class="headline">PREFERRED FIRST NAME</span>
                                                    </div>
                                                </v-card-title>
                                                <v-card-text>
                                                    <ul>
                                                        <li>We recognize you may prefer to be addressed by a name, other than your legal first name. If you wish to update your preferred first name, complete the change of name form.</li>
                                                        <li>Learn more from our frequently asked questions!</li>
                                                    </ul>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="http://portal.mycampus.ca/mycampusfiles/uoit/student/forms/change_of_name.pdf"
                                                           target="_blank" outline color="accent">Change of Name Form
                                                    </v-btn>
                                                    <v-btn href="http://portal.mycampus.ca/mycampusfiles/uoit/student/forms/change_of_name.pdf"
                                                           target="_blank" outline color="accent">FAQ
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Scholarships and Awards</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowAwards = !ShowAwards">
                                    <v-icon>{{ ShowAwards ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowAwards">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Thesis</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowThesis = !ShowThesis">
                                    <v-icon>{{ ShowThesis ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowThesis">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Announcements</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowAnnouncements = !ShowAnnouncements">
                                    <v-icon>{{ ShowAnnouncements ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                                    </v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowAnnouncements">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Upcoming Events</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowEvents = !ShowEvents">
                                    <v-icon>{{ ShowEvents ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowEvents">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs4>
                <v-layout column>
                    <v-flex>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Campus Alerts</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowAlerts = !ShowAlerts">
                                    <v-icon>{{ ShowAlerts ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowAlerts">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">warning</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    <ul>
                                                        <li>Winter weather; here’s what we do.
                                                            <ul>
                                                                <li>Winter weather often causes concern and confusion amongst our community. Questions arise about whether the campus remains open or closed during winter weather.</li>
                                                                <li>Read more about how the university operates and notifies the campus community, during winter weather.</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="https://news.uoit.ca/archives/2018/11/winter-is-comingheres-what-we-do.php"
                                                           target="_blank" outline color="accent">UOIT Winter Operation
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">warning</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    <ul>
                                                        <li>Interim smoke-free policy
                                                            <ul>
                                                                <li>As of October 15,&nbsp;smoking and/or vaping of any type, including tobacco, cannabis and shisha, is prohibited anywhere on the&nbsp;shared north Oshawa campus, DC’s Whitby campus and the university’s downtown campus location; this includes all student residences.</li>
                                                                <li>The policy applies to all members of the campus community, including students, faculty, staff, visitors and contractors.</li>
                                                                <li>Visit the smoke-free campus page for more information.</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="https://uoit.ca/smoke-free/index.php?utm_source=redirect&amp;utm_medium=mixed&amp;utm_campaign=smokefree"
                                                           target="_blank" outline color="accent">Smoke Free Campus
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Contact Us</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowContact = !ShowContact">
                                    <v-icon>{{ ShowContact ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowContact">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'Home',
        data: () => ({
            ShowHelp: true,
            ShowImportant: true,
            ShowAwards: true,
            ShowThesis: true,
            ShowAnnouncements: true,
            ShowEvents: true,
            ShowAlerts: true,
            ShowContact: true
        })
    }
</script>
