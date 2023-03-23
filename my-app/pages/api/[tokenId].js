export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";
    // The api is sending back metadata for a Saitama
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    
    if (tokenId < 21) {
      return res.status(200).json({
        name: "Saitama #" + tokenId,
        description: "Saitama is a collection of overpowered developers in crypto",
        image: image_url + tokenId + ".svg",
      });
    }

    if (tokenId > 20 && tokenId < 6970) {
      const newTokenId = tokenId % 20 != 0 ? tokenId % 20 : 1;
      return res.status(200).json({
        name: "Saitama #" + tokenId,
        description: "Saitama is a collection of overpowered developers in crypto",
        image: image_url + newTokenId + ".svg",
      });
    }
  }