//This file is automatically rebuilt by the Cesium build process.
define([
        './Constants/degreesPerRadian',
        './Constants/depthRange',
        './Constants/ellipsoidInverseRadii',
        './Constants/ellipsoidRadii',
        './Constants/epsilon1',
        './Constants/epsilon2',
        './Constants/epsilon3',
        './Constants/epsilon4',
        './Constants/epsilon5',
        './Constants/epsilon6',
        './Constants/epsilon7',
        './Constants/infinity',
        './Constants/oneOverPi',
        './Constants/oneOverTwoPi',
        './Constants/passCesium3DTile',
        './Constants/passCesium3DTileClassification',
        './Constants/passCesium3DTileClassificationIgnoreShow',
        './Constants/passClassification',
        './Constants/passCompute',
        './Constants/passEnvironment',
        './Constants/passGlobe',
        './Constants/passOpaque',
        './Constants/passOverlay',
        './Constants/passTerrainClassification',
        './Constants/passTranslucent',
        './Constants/pi',
        './Constants/piOverFour',
        './Constants/piOverSix',
        './Constants/piOverThree',
        './Constants/piOverTwo',
        './Constants/radiansPerDegree',
        './Constants/sceneMode2D',
        './Constants/sceneMode3D',
        './Constants/sceneModeColumbusView',
        './Constants/sceneModeMorphing',
        './Constants/solarRadius',
        './Constants/threePiOver2',
        './Constants/twoPi',
        './Constants/webMercatorMaxLatitude',
        './Structs/depthRangeStruct',
        './Structs/material',
        './Structs/materialInput',
        './Structs/ray',
        './Structs/raySegment',
        './Structs/shadowParameters',
        './Functions/HSBToRGB',
        './Functions/HSLToRGB',
        './Functions/RGBToHSB',
        './Functions/RGBToHSL',
        './Functions/RGBToXYZ',
        './Functions/XYZToRGB',
        './Functions/alphaWeight',
        './Functions/antialias',
        './Functions/approximateSphericalCoordinates',
        './Functions/branchFreeTernary',
        './Functions/cascadeColor',
        './Functions/cascadeDistance',
        './Functions/cascadeMatrix',
        './Functions/cascadeWeights',
        './Functions/columbusViewMorph',
        './Functions/computePosition',
        './Functions/cosineAndSine',
        './Functions/decompressTextureCoordinates',
        './Functions/depthClampFarPlane',
        './Functions/eastNorthUpToEyeCoordinates',
        './Functions/ellipsoidContainsPoint',
        './Functions/ellipsoidWgs84TextureCoordinates',
        './Functions/equalsEpsilon',
        './Functions/eyeOffset',
        './Functions/eyeToWindowCoordinates',
        './Functions/fastApproximateAtan',
        './Functions/fog',
        './Functions/gammaCorrect',
        './Functions/geodeticSurfaceNormal',
        './Functions/getDefaultMaterial',
        './Functions/getLambertDiffuse',
        './Functions/getSpecular',
        './Functions/getWaterNoise',
        './Functions/hue',
        './Functions/inverseGamma',
        './Functions/isEmpty',
        './Functions/isFull',
        './Functions/latitudeToWebMercatorFraction',
        './Functions/lineDistance',
        './Functions/luminance',
        './Functions/metersPerPixel',
        './Functions/modelToWindowCoordinates',
        './Functions/multiplyWithColorBalance',
        './Functions/nearFarScalar',
        './Functions/octDecode',
        './Functions/packDepth',
        './Functions/phong',
        './Functions/planeDistance',
        './Functions/pointAlongRay',
        './Functions/rayEllipsoidIntersectionInterval',
        './Functions/readDepth',
        './Functions/reverseLogDepth',
        './Functions/sampleOctahedralProjection',
        './Functions/saturation',
        './Functions/shadowDepthCompare',
        './Functions/shadowVisibility',
        './Functions/signNotZero',
        './Functions/sphericalHarmonics',
        './Functions/tangentToEyeSpaceMatrix',
        './Functions/transformPlane',
        './Functions/translateRelativeToEye',
        './Functions/translucentPhong',
        './Functions/transpose',
        './Functions/unpackDepth',
        './Functions/unpackFloat',
        './Functions/vertexLogDepth',
        './Functions/windowToEyeCoordinates',
        './Functions/writeDepthClampedToFarPlane',
        './Functions/writeLogDepth'
    ], function(
        czm_degreesPerRadian,
        czm_depthRange,
        czm_ellipsoidInverseRadii,
        czm_ellipsoidRadii,
        czm_epsilon1,
        czm_epsilon2,
        czm_epsilon3,
        czm_epsilon4,
        czm_epsilon5,
        czm_epsilon6,
        czm_epsilon7,
        czm_infinity,
        czm_oneOverPi,
        czm_oneOverTwoPi,
        czm_passCesium3DTile,
        czm_passCesium3DTileClassification,
        czm_passCesium3DTileClassificationIgnoreShow,
        czm_passClassification,
        czm_passCompute,
        czm_passEnvironment,
        czm_passGlobe,
        czm_passOpaque,
        czm_passOverlay,
        czm_passTerrainClassification,
        czm_passTranslucent,
        czm_pi,
        czm_piOverFour,
        czm_piOverSix,
        czm_piOverThree,
        czm_piOverTwo,
        czm_radiansPerDegree,
        czm_sceneMode2D,
        czm_sceneMode3D,
        czm_sceneModeColumbusView,
        czm_sceneModeMorphing,
        czm_solarRadius,
        czm_threePiOver2,
        czm_twoPi,
        czm_webMercatorMaxLatitude,
        czm_depthRangeStruct,
        czm_material,
        czm_materialInput,
        czm_ray,
        czm_raySegment,
        czm_shadowParameters,
        czm_HSBToRGB,
        czm_HSLToRGB,
        czm_RGBToHSB,
        czm_RGBToHSL,
        czm_RGBToXYZ,
        czm_XYZToRGB,
        czm_alphaWeight,
        czm_antialias,
        czm_approximateSphericalCoordinates,
        czm_branchFreeTernary,
        czm_cascadeColor,
        czm_cascadeDistance,
        czm_cascadeMatrix,
        czm_cascadeWeights,
        czm_columbusViewMorph,
        czm_computePosition,
        czm_cosineAndSine,
        czm_decompressTextureCoordinates,
        czm_depthClampFarPlane,
        czm_eastNorthUpToEyeCoordinates,
        czm_ellipsoidContainsPoint,
        czm_ellipsoidWgs84TextureCoordinates,
        czm_equalsEpsilon,
        czm_eyeOffset,
        czm_eyeToWindowCoordinates,
        czm_fastApproximateAtan,
        czm_fog,
        czm_gammaCorrect,
        czm_geodeticSurfaceNormal,
        czm_getDefaultMaterial,
        czm_getLambertDiffuse,
        czm_getSpecular,
        czm_getWaterNoise,
        czm_hue,
        czm_inverseGamma,
        czm_isEmpty,
        czm_isFull,
        czm_latitudeToWebMercatorFraction,
        czm_lineDistance,
        czm_luminance,
        czm_metersPerPixel,
        czm_modelToWindowCoordinates,
        czm_multiplyWithColorBalance,
        czm_nearFarScalar,
        czm_octDecode,
        czm_packDepth,
        czm_phong,
        czm_planeDistance,
        czm_pointAlongRay,
        czm_rayEllipsoidIntersectionInterval,
        czm_readDepth,
        czm_reverseLogDepth,
        czm_sampleOctahedralProjection,
        czm_saturation,
        czm_shadowDepthCompare,
        czm_shadowVisibility,
        czm_signNotZero,
        czm_sphericalHarmonics,
        czm_tangentToEyeSpaceMatrix,
        czm_transformPlane,
        czm_translateRelativeToEye,
        czm_translucentPhong,
        czm_transpose,
        czm_unpackDepth,
        czm_unpackFloat,
        czm_vertexLogDepth,
        czm_windowToEyeCoordinates,
        czm_writeDepthClampedToFarPlane,
        czm_writeLogDepth) {
                           'use strict';
                           return {
        czm_degreesPerRadian : czm_degreesPerRadian,
        czm_depthRange : czm_depthRange,
        czm_ellipsoidInverseRadii : czm_ellipsoidInverseRadii,
        czm_ellipsoidRadii : czm_ellipsoidRadii,
        czm_epsilon1 : czm_epsilon1,
        czm_epsilon2 : czm_epsilon2,
        czm_epsilon3 : czm_epsilon3,
        czm_epsilon4 : czm_epsilon4,
        czm_epsilon5 : czm_epsilon5,
        czm_epsilon6 : czm_epsilon6,
        czm_epsilon7 : czm_epsilon7,
        czm_infinity : czm_infinity,
        czm_oneOverPi : czm_oneOverPi,
        czm_oneOverTwoPi : czm_oneOverTwoPi,
        czm_passCesium3DTile : czm_passCesium3DTile,
        czm_passCesium3DTileClassification : czm_passCesium3DTileClassification,
        czm_passCesium3DTileClassificationIgnoreShow : czm_passCesium3DTileClassificationIgnoreShow,
        czm_passClassification : czm_passClassification,
        czm_passCompute : czm_passCompute,
        czm_passEnvironment : czm_passEnvironment,
        czm_passGlobe : czm_passGlobe,
        czm_passOpaque : czm_passOpaque,
        czm_passOverlay : czm_passOverlay,
        czm_passTerrainClassification : czm_passTerrainClassification,
        czm_passTranslucent : czm_passTranslucent,
        czm_pi : czm_pi,
        czm_piOverFour : czm_piOverFour,
        czm_piOverSix : czm_piOverSix,
        czm_piOverThree : czm_piOverThree,
        czm_piOverTwo : czm_piOverTwo,
        czm_radiansPerDegree : czm_radiansPerDegree,
        czm_sceneMode2D : czm_sceneMode2D,
        czm_sceneMode3D : czm_sceneMode3D,
        czm_sceneModeColumbusView : czm_sceneModeColumbusView,
        czm_sceneModeMorphing : czm_sceneModeMorphing,
        czm_solarRadius : czm_solarRadius,
        czm_threePiOver2 : czm_threePiOver2,
        czm_twoPi : czm_twoPi,
        czm_webMercatorMaxLatitude : czm_webMercatorMaxLatitude,
        czm_depthRangeStruct : czm_depthRangeStruct,
        czm_material : czm_material,
        czm_materialInput : czm_materialInput,
        czm_ray : czm_ray,
        czm_raySegment : czm_raySegment,
        czm_shadowParameters : czm_shadowParameters,
        czm_HSBToRGB : czm_HSBToRGB,
        czm_HSLToRGB : czm_HSLToRGB,
        czm_RGBToHSB : czm_RGBToHSB,
        czm_RGBToHSL : czm_RGBToHSL,
        czm_RGBToXYZ : czm_RGBToXYZ,
        czm_XYZToRGB : czm_XYZToRGB,
        czm_alphaWeight : czm_alphaWeight,
        czm_antialias : czm_antialias,
        czm_approximateSphericalCoordinates : czm_approximateSphericalCoordinates,
        czm_branchFreeTernary : czm_branchFreeTernary,
        czm_cascadeColor : czm_cascadeColor,
        czm_cascadeDistance : czm_cascadeDistance,
        czm_cascadeMatrix : czm_cascadeMatrix,
        czm_cascadeWeights : czm_cascadeWeights,
        czm_columbusViewMorph : czm_columbusViewMorph,
        czm_computePosition : czm_computePosition,
        czm_cosineAndSine : czm_cosineAndSine,
        czm_decompressTextureCoordinates : czm_decompressTextureCoordinates,
        czm_depthClampFarPlane : czm_depthClampFarPlane,
        czm_eastNorthUpToEyeCoordinates : czm_eastNorthUpToEyeCoordinates,
        czm_ellipsoidContainsPoint : czm_ellipsoidContainsPoint,
        czm_ellipsoidWgs84TextureCoordinates : czm_ellipsoidWgs84TextureCoordinates,
        czm_equalsEpsilon : czm_equalsEpsilon,
        czm_eyeOffset : czm_eyeOffset,
        czm_eyeToWindowCoordinates : czm_eyeToWindowCoordinates,
        czm_fastApproximateAtan : czm_fastApproximateAtan,
        czm_fog : czm_fog,
        czm_gammaCorrect : czm_gammaCorrect,
        czm_geodeticSurfaceNormal : czm_geodeticSurfaceNormal,
        czm_getDefaultMaterial : czm_getDefaultMaterial,
        czm_getLambertDiffuse : czm_getLambertDiffuse,
        czm_getSpecular : czm_getSpecular,
        czm_getWaterNoise : czm_getWaterNoise,
        czm_hue : czm_hue,
        czm_inverseGamma : czm_inverseGamma,
        czm_isEmpty : czm_isEmpty,
        czm_isFull : czm_isFull,
        czm_latitudeToWebMercatorFraction : czm_latitudeToWebMercatorFraction,
        czm_lineDistance : czm_lineDistance,
        czm_luminance : czm_luminance,
        czm_metersPerPixel : czm_metersPerPixel,
        czm_modelToWindowCoordinates : czm_modelToWindowCoordinates,
        czm_multiplyWithColorBalance : czm_multiplyWithColorBalance,
        czm_nearFarScalar : czm_nearFarScalar,
        czm_octDecode : czm_octDecode,
        czm_packDepth : czm_packDepth,
        czm_phong : czm_phong,
        czm_planeDistance : czm_planeDistance,
        czm_pointAlongRay : czm_pointAlongRay,
        czm_rayEllipsoidIntersectionInterval : czm_rayEllipsoidIntersectionInterval,
        czm_readDepth : czm_readDepth,
        czm_reverseLogDepth : czm_reverseLogDepth,
        czm_sampleOctahedralProjection : czm_sampleOctahedralProjection,
        czm_saturation : czm_saturation,
        czm_shadowDepthCompare : czm_shadowDepthCompare,
        czm_shadowVisibility : czm_shadowVisibility,
        czm_signNotZero : czm_signNotZero,
        czm_sphericalHarmonics : czm_sphericalHarmonics,
        czm_tangentToEyeSpaceMatrix : czm_tangentToEyeSpaceMatrix,
        czm_transformPlane : czm_transformPlane,
        czm_translateRelativeToEye : czm_translateRelativeToEye,
        czm_translucentPhong : czm_translucentPhong,
        czm_transpose : czm_transpose,
        czm_unpackDepth : czm_unpackDepth,
        czm_unpackFloat : czm_unpackFloat,
        czm_vertexLogDepth : czm_vertexLogDepth,
        czm_windowToEyeCoordinates : czm_windowToEyeCoordinates,
        czm_writeDepthClampedToFarPlane : czm_writeDepthClampedToFarPlane,
        czm_writeLogDepth : czm_writeLogDepth};
});