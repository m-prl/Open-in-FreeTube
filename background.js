// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function toFreetubeUrl(url) {
  return `freetube://${url}`;
}


const youtube = 'https://www.youtube.com/watch?v=';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(youtube)) {
    freetube_url = toFreetubeUrl(tab.url)
    console.info(
      "Redirecting",
      `"${tab.url}"`,
      " to ",
      `"${freetube_url}"`
    );
    chrome.tabs.create({ url: freetube_url });
  }
});
