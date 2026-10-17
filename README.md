# Example of Encryption at Rest for DevOps in Software Engineering

To run the code in the example of encryption at rest, follow these instructions.

First, clone the repository with `git`. You can use either the ssh or https command.
```sh
# ssh
git clone git@github.com:richytong/encryption-at-rest-example.git

# https
git clone https://github.com/richytong/encryption-at-rest-example.git
```

Next, change your directory into the repository you just cloned.
```sh
cd encryption-at-rest-example
```

Make sure you have Node.js installed. You can install Node.js with [nvm](https://github.com/nvm-sh/nvm). With `nvm`, install Node.js with the following command.
```sh
nvm install 26
nvm alias default 26
```

Now you should have `npm` installed as well. `npm` is the package manager for Node.js. Install the dependencies for the example code with this command.
```sh
npm i
```

Finally, run the example with this command.
```sh
node encryption-at-rest.js
```

## License
The code in this example is freely distributed under the [CFOSS License](https://cloutsworld.com/en-us/legal/license/cfoss).

## Support
 * minimum Node.js version: 16
