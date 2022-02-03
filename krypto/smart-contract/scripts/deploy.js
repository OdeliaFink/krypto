const main = async () => {
  const Transactions = await hre.ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy(); //instance of contract which includes address

  await transactions.deployed();

  console.log('Transactions deployed to:', transactions.address);
};

const runMain = async () => {
  try {
    await main(); //executes the main contract
    process.exit(0); //0 means process is successful
  } catch (error) {
    console.error(error.message);
    process.exit(1); //error
  }
};

runMain();
