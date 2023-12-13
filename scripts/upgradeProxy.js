const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0xf5E9926179f774F4C8fc9bB00329C874AdEECED9';

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log("The current contract owner is: " + await upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}

main();

/*
    The current contract owner is: 0x8783746a70ABA0587f9C872Bf52f952E50208730
    Implementation contract address: 0x8679E79D7F6e18e8F7281B42eCf8FE04BF65076a
 */
