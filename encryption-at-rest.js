const crypto = require("crypto")
const DiskHashTable = require("presidium-db/DiskHashTable")

setImmediate(async () => {
  const secretHt = new DiskHashTable({
    storagePath: `${__dirname}/database/secret-storage`,
    headerPath: `${__dirname}/database/header-storage`,
    initialLength: 1048576,
    itemSize: 1024,
  })
  await secretHt.init()

  const algorithm = "aes256"
  const secretKey = "your-secret-sever-encryption-key"
  const iv = Buffer.from("ec8e530d56525d9c0fa7ce741ee6eeb5", "hex")

  async function writeEncrypted(name, value) {
    const cipher =
      crypto.createCipheriv(algorithm, secretKey, iv, crypto.randomBytes(16))
    const encrypted =
      cipher.update(value, "utf8", "hex") + cipher.final("hex")
    await secretHt.set(name, encrypted)
  }

  async function retrieveEncrypted(name) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv)
    const encryptedValue = await secretHt.get(name)
    if (encryptedValue == null) {
      throw new Error("Not Found")
    }
    const value =
      decipher.update(encryptedValue, "hex", "utf8") + decipher.final("utf8")
    return value
  }

  await writeEncrypted("my-secret", "secret123")

  const secretValue = await retrieveEncrypted("my-secret")

  console.log(secretValue)
})
