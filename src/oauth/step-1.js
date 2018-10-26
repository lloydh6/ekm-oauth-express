const step1 = (req, res) => {
    console.log(req.query == {});
    if (req == null || req.query == null || req.query == {}) {
        throw new Error('Error: Request is null.');
    }

    return res.send({ code: req.query.code, scope: req.query.scope, state: req.quer });
}

module.exports = step1;