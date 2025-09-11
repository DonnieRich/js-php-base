const items = [1, 2, 3];

async function processItems() {
  for (const item of items) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Done:", item);
  }

  console.log("All done! ✅");
}

processItems();