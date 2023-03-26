import { ethers } from "hardhat";

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  await voting.deployed();

  console.log(`Voting deployed to ${voting.address}`);
  // console.log(`Block explorer URL: https://l2scan.scroll.io/address/${lock.address}`); Uncomment here to use the pre-alpha
  console.log(`Block explorer URL: https://blockscout.scroll.io/address/${voting.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
