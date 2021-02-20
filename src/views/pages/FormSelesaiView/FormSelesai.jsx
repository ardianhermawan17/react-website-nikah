import React from 'react';
import {
    Grid,
    Card,
    Box,
    CardContent,
    makeStyles,
    Typography,
    Divider, Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    gridItem: {
        width: '100%',
        height: '100%',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        background: theme.palette.background.milkWhite,
        boxShadow: theme.palette.neumorphismForm.main
    },
    card: {
        background: 'transparent',
        boxShadow: 'none'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        fontFamily: theme.palette.customFont.openSans,
        fontWeight: "bold",
        color: theme.palette.primary.main
    },
    text: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontFamily: theme.palette.customFont.openSans,
    },
    divider: {
        marginTop: '1rem',
        marginBottom: '1.5rem',
    },
    buttonNext: {
        boxShadow: theme.palette.neumorphismButton.mainPage
    },
}))

const FormSelesai = ({ ...rest }) => {
    const classes = useStyles();
    const dataNikah = useSelector(data => data.formSelesai);
    const {nomorSurat, lokasi, dataDiri, ricianSurat} = dataNikah;

    return (
        <Grid
            item
            xs={12}
            className={classes.gridItem}
        >
            <Card className={classes.card}>
                <CardContent className={classes.cardContent} >
                 <Box
                     mt={1}
                     mb={3}
                 >
                     <Typography
                         variant="h4"
                         className={classes.title}
                     >
                         Nomor Surat
                     </Typography>
                     <Divider className={classes.divider}/>
                     <Box
                         display="flex"
                         flexDirection="column"
                     >
                         <Typography
                             variant="p"
                             className={classes.text}
                         >
                             {`Nomor Surat : ${nomorSurat}`}
                         </Typography>
                     </Box>
                 </Box>
                    <Box
                        mt={2}
                        mb={2}
                    >
                        <Typography
                            variant="h4"
                            className={classes.title}
                        >
                            Lokasi
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Box
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Kantor Desa/Kelurahan : ${lokasi.kelurahan}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Kecamatan : ${lokasi.kecamatan}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {` Kabupaten/Kota : ${lokasi.kota}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        mt={2}
                        mb={2}
                    >
                        <Typography
                            variant="h4"
                            className={classes.title}
                        >
                            Data diri
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Box
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Nama Lengkap : ${dataDiri.namaLengkap}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Jenis Kelamin : ${dataDiri.jenisKelamin}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Tempat Kelahiran : ${dataDiri.tempatLahir}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Tanggal Lahir : ${dataDiri.tanggalLahir.hari}-${dataDiri.tanggalLahir.bulan}-${dataDiri.tanggalLahir.tahun}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Kewarganegaran : ${dataDiri.warganegara}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Agama : ${dataDiri.agama}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Tempat Tinggal : ${dataDiri.tempatTinggal}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Nama Ayah : ${dataDiri.ayah}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Status Perkawinan : ${dataDiri.statusPerkawinan}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Nama Mantan Suami/Istri : ${dataDiri.namaMantan}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        mt={2}
                        mb={2}
                    >
                        <Typography
                            variant="h4"
                            className={classes.title}
                        >
                            Waktu, tempat pembuatan surat dan tanda tangan
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Box
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Tempat Pembuatan Surat: ${ricianSurat.tempatPembuatan}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Waktu Pembuatan Surat : ${ricianSurat.tempatPembuatan}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Kepala desa/kelurahan : ${ricianSurat.kepalaDinas}`}
                            </Typography>
                            <Typography
                                variant="p"
                                className={classes.text}
                            >
                                {`Tanda Tangan : ....`}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        mt={8}
                        mb={2}
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.buttonNext}
                        >
                            Selanjutnya
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default FormSelesai;
