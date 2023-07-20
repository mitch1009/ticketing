module.exports = {
    default: {
        format: ['html:../docs/index.html'],
        publishQuiet: true,
        paths: ["features/*.{feature,md}"],
        require: ['features/steps/**/*.{ts}'],
     }
}