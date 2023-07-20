module.exports = {
    default: {
        format: ['html:dist/results.html'],
        publishQuiet: true,
        paths: ["features/*.{feature,md}"],
        require: ['features/steps/**/*.{ts}'],
     }
}