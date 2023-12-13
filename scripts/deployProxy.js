const { ethers, upgrades } = require('hardhat');

async function main() {
    const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
    const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
    await proxy.waitForDeployment()

    const address = await proxy.getAddress();
    console.log('Proxy contract address: ' + address);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        address
    );

    console.log('Implementation contract address: ' + implementationAddress);
}

main();

/*
    13.12.23 - ran this:
        Proxy contract address: 0xf5E9926179f774F4C8fc9bB00329C874AdEECED9
        Implementation contract address: 0x1f9f61bD3eC53A8bb4Ff2FF9afBD0a76dD214A01
 */
