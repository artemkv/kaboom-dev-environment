let db = connect("localhost:27017/kaboom");

// Create test application
db.applications.update(
  { appCode: '9735965b-e1cb-4d7f-adb9-a4adf457f61a' },
  { $setOnInsert: { appCode: '9735965b-e1cb-4d7f-adb9-a4adf457f61a' } },
  { upsert: true }
);
db.applications.ensureIndex({"appCode" : 1});

// Create indexes for start event stats
db.appstats.start.bysecond.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.start.byminute.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.start.byhour.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.start.byday.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.start.bymonth.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.start.byyear.ensureIndex({"appId" : 1, "dt" : 1});

// Create indexes for crash event stats
db.appstats.crash.bysecond.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.crash.byminute.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.crash.byhour.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.crash.byday.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.crash.bymonth.ensureIndex({"appId" : 1, "dt" : 1});
db.appstats.crash.byyear.ensureIndex({"appId" : 1, "dt" : 1});

// Create index for crash info
db.appcrashes.ensureIndex({"appId" : 1, "hash" : 1});