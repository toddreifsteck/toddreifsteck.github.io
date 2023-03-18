// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

fetch("file1.json");
self.addEventListener("fetch", (event) => {
  fetch("file2.json");
  event.respondWith(fetch(event.request));    
  });