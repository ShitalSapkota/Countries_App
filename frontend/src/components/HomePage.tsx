import { Box, Typography, Card } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Hero Banner */}
        <Box sx={{
          position: 'relative',
          height: 384,
        }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('../public/worldMapImage.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.75
            }}
          />
        </Box>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
          <Card sx={{
            maxWidth: 'xl',
            mx: 'auto',
            p: 4,
            boxShadow: 3
          }}>
            <Typography variant="h2" component="h2" gutterBottom>
              About Country App 🌍
            </Typography>
            <Typography color="inherit">
                This country app is an assignment project for React Advanced. And all you can see lists of all countries and inside country details, there is all description about country capital and the weather information. You can also login with google email or create new one. And all data is protected in supabase. 
                <br />
                "Dark mode squad or light mode crew? 🕶️✨ Flip the switch, slide that toggle, and ride the vibe wave—your screen, your rules! Night owl or sunshine spirit? 🎉🌚🌝"
            </Typography>
          </Card>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{
          color: 'inherit',
          py: 4,
          mt: 'auto'
        }}>
          <Box sx={{ maxWidth: 'xl', mx: 'auto', px: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              &copy; 2024 Shital Sapkota. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}